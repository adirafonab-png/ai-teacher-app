import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DoubtQuestion {
    id: bigint;
    question: string;
    subject: T__1;
    teacher: string;
    response: string;
    student: Principal;
    classLevel: T;
}
export interface UserProfile {
    name: string;
    email: string;
}
export interface TeacherProfile {
    subjects: Array<T__1>;
    name: string;
    classes: Array<T>;
    gender: Variant_female_male;
}
export enum T {
    jee = "jee",
    class1 = "class1",
    class2 = "class2",
    class3 = "class3",
    class4 = "class4",
    class5 = "class5",
    class6 = "class6",
    class7 = "class7",
    class8 = "class8",
    class9 = "class9",
    neet = "neet",
    class10 = "class10",
    class11 = "class11",
    class12 = "class12"
}
export enum T__1 {
    biology = "biology",
    socialStudies = "socialStudies",
    hindi = "hindi",
    politicalScience = "politicalScience",
    history = "history",
    geography = "geography",
    economics = "economics",
    chemistry = "chemistry",
    mathematics = "mathematics",
    physics = "physics",
    english = "english",
    science = "science",
    computerScience = "computerScience"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum Variant_female_male {
    female = "female",
    male = "male"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getDoubtById(doubtId: bigint): Promise<DoubtQuestion | null>;
    getDoubtHistory(): Promise<Array<DoubtQuestion>>;
    getDoubtHistoryBySubject(subject: T__1): Promise<Array<DoubtQuestion>>;
    getDoubtHistoryByTeacher(teacher: string): Promise<Array<DoubtQuestion>>;
    getDoubtsByStudent(studentId: Principal): Promise<Array<DoubtQuestion>>;
    getLessonContent(classLevel: T, subject: T__1): Promise<string | null>;
    getMyDoubtHistory(): Promise<Array<DoubtQuestion>>;
    getTeacherClasses(teacher: string): Promise<Array<T> | null>;
    getTeacherProfiles(): Promise<Array<TeacherProfile>>;
    getTeacherSubjects(teacher: string): Promise<Array<T__1> | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeSystem(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setDoubtResponse(doubtId: bigint, response: string): Promise<void>;
    submitDoubt(question: string, teacherName: string, classLevel: T, subject: T__1): Promise<DoubtQuestion>;
}
