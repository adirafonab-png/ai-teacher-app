import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  module ClassLevel {
    public type T = {
      #class1;
      #class2;
      #class3;
      #class4;
      #class5;
      #class6;
      #class7;
      #class8;
      #class9;
      #class10;
      #class11;
      #class12;
      #jee;
      #neet;
    };

    public func toText(level : T) : Text {
      switch (level) {
        case (#class1) { "class1" };
        case (#class2) { "class2" };
        case (#class3) { "class3" };
        case (#class4) { "class4" };
        case (#class5) { "class5" };
        case (#class6) { "class6" };
        case (#class7) { "class7" };
        case (#class8) { "class8" };
        case (#class9) { "class9" };
        case (#class10) { "class10" };
        case (#class11) { "class11" };
        case (#class12) { "class12" };
        case (#jee) { "jee" };
        case (#neet) { "neet" };
      };
    };
  };

  module SubjectCategory {
    public type T = {
      #mathematics;
      #science;
      #physics;
      #chemistry;
      #biology;
      #english;
      #history;
      #geography;
      #hindi;
      #socialStudies;
      #computerScience;
      #economics;
      #politicalScience;
    };

    public func toText(subject : T) : Text {
      switch (subject) {
        case (#mathematics) { "mathematics" };
        case (#science) { "science" };
        case (#physics) { "physics" };
        case (#chemistry) { "chemistry" };
        case (#biology) { "biology" };
        case (#english) { "english" };
        case (#history) { "history" };
        case (#geography) { "geography" };
        case (#hindi) { "hindi" };
        case (#socialStudies) { "socialStudies" };
        case (#computerScience) { "computerScience" };
        case (#economics) { "economics" };
        case (#politicalScience) { "politicalScience" };
      };
    };
  };

  public type TeacherProfile = {
    name : Text;
    gender : {
      #male;
      #female;
    };
    subjects : [SubjectCategory.T];
    classes : [ClassLevel.T];
  };

  public type DoubtQuestion = {
    id : Nat;
    question : Text;
    student : Principal;
    teacher : Text;
    classLevel : ClassLevel.T;
    subject : SubjectCategory.T;
    response : Text;
  };

  public type SubjectCategory = SubjectCategory.T;
  public type ClassLevel = ClassLevel.T;

  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let teachers = Map.empty<Text, TeacherProfile>();
  let lessonContents = Map.empty<Text, Text>();
  let doubts = Map.empty<Nat, DoubtQuestion>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Authorization State and Mixin
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Persistent ID counter for doubts
  var nextDoubtId = 1;

  // ── User Profile Functions (required by frontend) ──────────────────────────

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get their profile");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // ── System Initialization ──────────────────────────────────────────────────

  public shared ({ caller }) func initializeSystem() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can initialize the system");
    };
    initializeTeachers();
    initializeLessonContents();
  };

  func initializeTeachers() {
    let teachersData = [
      {
        name = "Mannan";
        gender = #male;
        subjects = [#mathematics, #science, #physics, #chemistry];
        classes = [#class5, #class6, #class7, #jee, #neet];
      },
      {
        name = "Tahira";
        gender = #female;
        subjects = [#biology, #english, #history, #geography];
        classes = [#class1, #class2, #class3, #class4];
      },
    ];

    for (teacher in teachersData.values()) {
      teachers.add(teacher.name, teacher);
    };
  };

  func initializeLessonContents() {
    let lessonsData = [
      (
        "class1-mathematics",
        "## Grade 1 Mathematics\n- Numbers from 1 to 100\n- Simple addition and subtraction\n- Introduction to shapes\n- Counting and patterns",
      ),
      (
        "class1-english",
        "## Grade 1 English\n- Alphabets (A-Z)\n- Simple words and sentences\n- Basic grammar\n- Reading comprehension",
      ),
      (
        "jee-physics",
        "## JEE Physics\n- Mechanics\n- Thermodynamics\n- Electromagnetism\n- Modern physics\n- Optics\n- Waves and oscillations",
      ),
      (
        "neet-biology",
        "## NEET Biology\n- Cell biology\n- Human physiology\n- Genetics\n- Plant reproduction\n- Ecology\n- Evolution",
      ),
    ];

    for ((key, content) in lessonsData.values()) {
      lessonContents.add(key, content);
    };
  };

  // ── Teacher Functions (public read, no auth required) ─────────────────────

  public query func getTeacherProfiles() : async [TeacherProfile] {
    teachers.values().toArray();
  };

  public query func getTeacherSubjects(teacher : Text) : async ?[SubjectCategory.T] {
    switch (teachers.get(teacher)) {
      case (null) { null };
      case (?profile) { ?profile.subjects };
    };
  };

  public query func getTeacherClasses(teacher : Text) : async ?[ClassLevel.T] {
    switch (teachers.get(teacher)) {
      case (null) { null };
      case (?profile) { ?profile.classes };
    };
  };

  // ── Lesson Content (public read, no auth required) ────────────────────────

  public query func getLessonContent(classLevel : ClassLevel.T, subject : SubjectCategory.T) : async ?Text {
    let key = ClassLevel.toText(classLevel) # "-" # SubjectCategory.toText(subject);
    lessonContents.get(key);
  };

  // ── Doubt Management ───────────────────────────────────────────────────────

  // Only authenticated users (#user role) can submit doubts
  public shared ({ caller }) func submitDoubt(
    question : Text,
    teacherName : Text,
    classLevel : ClassLevel.T,
    subject : SubjectCategory.T,
  ) : async DoubtQuestion {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can submit doubts");
    };

    let response = "Placeholder answer: The teacher will respond soon!";

    let doubt = {
      id = nextDoubtId;
      question;
      student = caller;
      teacher = teacherName;
      classLevel;
      subject;
      response;
    };

    doubts.add(nextDoubtId, doubt);
    nextDoubtId += 1;
    doubt;
  };

  // Only admins can set/update doubt responses
  public shared ({ caller }) func setDoubtResponse(doubtId : Nat, response : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update doubt responses");
    };
    switch (doubts.get(doubtId)) {
      case (null) { Runtime.trap("Doubt not found") };
      case (?doubt) {
        let updatedDoubt = {
          doubt with
          response
        };
        doubts.add(doubtId, updatedDoubt);
      };
    };
  };

  // Admin-only: view all doubts across all students
  public query ({ caller }) func getDoubtHistory() : async [DoubtQuestion] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all doubt history");
    };
    doubts.values().toArray();
  };

  // Caller can view their own doubt; admins can view any doubt
  public query ({ caller }) func getDoubtById(doubtId : Nat) : async ?DoubtQuestion {
    switch (doubts.get(doubtId)) {
      case (null) { null };
      case (?doubt) {
        if (doubt.student != caller and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only view your own doubts");
        };
        ?doubt;
      };
    };
  };

  // Admin-only: view all doubts for a specific teacher
  public query ({ caller }) func getDoubtHistoryByTeacher(teacher : Text) : async [DoubtQuestion] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view doubts by teacher");
    };
    doubts.values().toArray().filter(func(d : DoubtQuestion) : Bool { d.teacher == teacher });
  };

  // Caller can view their own doubts; admins can view any student's doubts
  public query ({ caller }) func getDoubtsByStudent(studentId : Principal) : async [DoubtQuestion] {
    if (caller != studentId and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own doubts");
    };
    doubts.values().toArray().filter(func(d : DoubtQuestion) : Bool { d.student == studentId });
  };

  // Admin-only: view all doubts for a specific subject
  public query ({ caller }) func getDoubtHistoryBySubject(subject : SubjectCategory.T) : async [DoubtQuestion] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view doubts by subject");
    };
    doubts.values().toArray().filter(func(d : DoubtQuestion) : Bool { d.subject == subject });
  };

  // Caller retrieves their own doubt history (authenticated users only)
  public query ({ caller }) func getMyDoubtHistory() : async [DoubtQuestion] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their doubt history");
    };
    doubts.values().toArray().filter(func(d : DoubtQuestion) : Bool { d.student == caller });
  };
};
