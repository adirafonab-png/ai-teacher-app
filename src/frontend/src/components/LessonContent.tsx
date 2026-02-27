import React, { useEffect, useRef } from 'react';
import { T, T__1 } from '../backend';
import { useLessonContent } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { useTeacher } from '../context/TeacherContext';
import { useChalkWrite } from '../hooks/useChalkWrite';

interface LessonContentProps {
  classLevel: T | null;
  subject: T__1 | null;
  onSpeak?: (text: string) => void;
}

// Comprehensive local lesson content for all class/subject combinations
const LOCAL_LESSONS: Record<string, string[]> = {
  'class1-mathematics': [
    '📌 Numbers 1 to 100',
    '➕ Addition: 2 + 3 = 5',
    '➖ Subtraction: 5 - 2 = 3',
    '🔷 Shapes: Circle, Square, Triangle, Rectangle',
    '🔢 Counting objects in groups',
    '📏 Comparing: Big & Small, More & Less',
  ],
  'class1-english': [
    '🔤 Alphabets A to Z',
    '📝 Simple 3-letter words: cat, bat, hat',
    '📖 Reading simple sentences',
    '✏️ Writing capital and small letters',
    '🗣️ Basic greetings: Hello, Thank you, Please',
  ],
  'class1-hindi': [
    '🔤 Hindi Varnamala: अ आ इ ई...',
    '✏️ Writing basic Hindi letters',
    '📖 Simple Hindi words: माँ, पापा, घर',
    '🗣️ Basic Hindi sentences',
  ],
  'class1-science': [
    '🌱 Plants around us',
    '🐾 Animals and their sounds',
    '🌤️ Weather: Sunny, Rainy, Cloudy',
    '💧 Water and its uses',
    '🏠 Our body parts',
  ],
  'class1-socialStudies': [
    '👨‍👩‍👧 My family',
    '🏫 My school',
    '🏘️ My neighborhood',
    '🚌 Means of transport',
    '🇮🇳 Our country India',
  ],
  'class2-mathematics': [
    '🔢 Numbers up to 1000',
    '➕ Addition with carrying',
    '➖ Subtraction with borrowing',
    '✖️ Introduction to multiplication tables (2, 3, 5)',
    '📐 Measurement: cm, m, kg, litre',
  ],
  'class3-mathematics': [
    '🔢 Numbers up to 10,000',
    '✖️ Multiplication tables 1-10',
    '➗ Simple division',
    '💰 Money: Rupees and Paise',
    '⏰ Time: Hours and Minutes',
    '📐 Perimeter of simple shapes',
  ],
  'class4-mathematics': [
    '🔢 Numbers up to 1,00,000',
    '✖️ Long multiplication',
    '➗ Long division',
    '🍕 Fractions: ½, ¼, ¾',
    '📐 Area and Perimeter',
    '📊 Simple graphs and data',
  ],
  'class5-mathematics': [
    '🔢 Large numbers and place value',
    '🍕 Fractions and decimals',
    '📐 Area of rectangle and square',
    '📊 Average and data handling',
    '🔺 Introduction to angles',
    '💯 Percentage basics',
  ],
  'class6-mathematics': [
    '🔢 Integers: positive and negative numbers',
    '🍕 Fractions and decimals operations',
    '📐 Basic geometry: lines, angles, triangles',
    '🔣 Introduction to algebra: variables',
    '📊 Data handling and bar graphs',
    '💯 Ratio and proportion',
  ],
  'class7-mathematics': [
    '🔣 Algebraic expressions',
    '📐 Triangles and their properties',
    '💯 Percentage, profit and loss',
    '🔢 Rational numbers',
    '📊 Simple and compound interest',
    '🔺 Congruence of triangles',
  ],
  'class8-mathematics': [
    '🔣 Linear equations in one variable',
    '📐 Quadrilaterals and polygons',
    '💯 Compound interest',
    '🔢 Squares, cubes and roots',
    '📊 Pie charts and histograms',
    '🔺 Mensuration: area and volume',
  ],
  'class9-mathematics': [
    '🔢 Number systems: real numbers',
    '🔣 Polynomials and factorization',
    '📐 Coordinate geometry basics',
    "📏 Euclid's geometry",
    '🔺 Triangles: congruence and similarity',
    '📊 Statistics: mean, median, mode',
    '🎲 Introduction to probability',
  ],
  'class10-mathematics': [
    "🔢 Real numbers and Euclid's algorithm",
    '🔣 Polynomials: zeros and graphs',
    '📐 Pair of linear equations',
    '🔺 Quadratic equations',
    '📏 Arithmetic progressions (AP)',
    '🔵 Circles: tangents and chords',
    '📐 Trigonometry: sin, cos, tan',
    '📊 Statistics and probability',
  ],
  'class11-mathematics': [
    '🔢 Sets, relations and functions',
    '📐 Trigonometric functions',
    '🔣 Complex numbers',
    '📏 Sequences and series',
    '📐 Straight lines and conic sections',
    '📊 Statistics: variance and SD',
    '🎲 Probability: classical approach',
    '🔢 Binomial theorem',
  ],
  'class12-mathematics': [
    '🔣 Relations and functions',
    '📐 Inverse trigonometric functions',
    '🔢 Matrices and determinants',
    '📏 Continuity and differentiability',
    '📐 Applications of derivatives',
    '∫ Integrals and applications',
    '📊 Differential equations',
    '🎲 Probability: Bayes theorem',
    '📐 3D geometry and vectors',
  ],
  'class9-science': [
    '⚛️ Matter: states and properties',
    '🔬 Atoms and molecules',
    '🧬 Cell: the unit of life',
    '🌱 Tissues in plants and animals',
    '⚡ Motion: speed, velocity, acceleration',
    "🍎 Force and Newton's laws",
    '🌊 Sound: propagation and reflection',
    '🌿 Natural resources',
  ],
  'class10-science': [
    '◄ Chemical reactions and equations',
    '🧪 Acids, bases and salts',
    "⚡ Electricity: Ohm's law, circuits",
    '🧲 Magnetic effects of current',
    '🧬 Heredity and evolution',
    '🌱 Life processes: nutrition, respiration',
    '🌍 Our environment',
    '💡 Sources of energy',
  ],
  'jee-physics': [
    "⚡ Mechanics: Kinematics, Newton's Laws, Work-Energy",
    '🌊 Waves and Oscillations: SHM, wave equations',
    '🔥 Thermodynamics: laws, heat engines',
    "⚡ Electrostatics: Coulomb's law, Gauss's law",
    "🔌 Current Electricity: Kirchhoff's laws",
    "🧲 Magnetism: Biot-Savart, Faraday's law",
    '💡 Optics: reflection, refraction, lenses',
    '⚛️ Modern Physics: photoelectric effect, nuclear physics',
  ],
  'jee-chemistry': [
    '⚛️ Atomic structure: Bohr model, quantum numbers',
    '🔗 Chemical bonding: ionic, covalent, VSEPR',
    '⚖️ Stoichiometry and mole concept',
    '⚗️ Thermodynamics: enthalpy, entropy, Gibbs energy',
    '⚡ Electrochemistry: cells, Nernst equation',
    '🧪 Organic chemistry: reactions and mechanisms',
    '🔬 Coordination compounds',
    '📊 p-block, d-block elements',
  ],
  'jee-mathematics': [
    '📐 Coordinate geometry: conics, 3D',
    '∫ Calculus: limits, derivatives, integrals',
    '🔢 Algebra: complex numbers, matrices',
    '📏 Sequences, series and binomial theorem',
    '🎲 Probability and statistics',
    '🔺 Trigonometry: identities and equations',
    '📐 Vectors and 3D geometry',
    '🔣 Differential equations',
  ],
  'neet-biology': [
    '🧬 Cell biology: structure, division, biomolecules',
    '🌱 Plant physiology: photosynthesis, respiration',
    '🫀 Human physiology: digestion, circulation, respiration',
    "🧬 Genetics: Mendel's laws, DNA replication",
    '🌍 Ecology: ecosystems, biodiversity',
    '🔬 Microbes in human welfare',
    '🌿 Reproduction in plants and animals',
    '🧬 Biotechnology: PCR, recombinant DNA',
  ],
  'neet-physics': [
    '⚡ Mechanics and laws of motion',
    '🌊 Waves, sound and optics',
    '🔥 Thermodynamics',
    '⚡ Electricity and magnetism',
    '⚛️ Modern physics: nuclear and atomic',
    '💡 Ray optics and optical instruments',
  ],
  'neet-chemistry': [
    '⚛️ Atomic structure and periodic table',
    '🔗 Chemical bonding',
    '⚗️ Thermodynamics and equilibrium',
    '🧪 Organic chemistry: hydrocarbons, biomolecules',
    '⚡ Electrochemistry',
    '📊 s, p, d block elements',
  ],
};

// Convert T enum value to string key for LOCAL_LESSONS lookup
function classLevelToKey(classLevel: T): string {
  return String(classLevel);
}

function getLocalLesson(classLevel: T, subject: T__1): string[] | null {
  const key = `${classLevelToKey(classLevel)}-${String(subject)}`;
  return LOCAL_LESSONS[key] || null;
}

// Convert T enum to human-readable label
function classLevelToLabel(classLevel: T): string {
  const str = String(classLevel);
  if (str === 'jee') return 'JEE';
  if (str === 'neet') return 'NEET';
  return str.replace('class', 'Class ');
}

function getTeacherIntro(teacherName: string, classLevel: T, subject: T__1): string {
  const classLabel = classLevelToLabel(classLevel);
  const subjectLabel = String(subject).charAt(0).toUpperCase() + String(subject).slice(1);
  if (teacherName === 'Mannan') {
    return `Yaar! Let's crush ${subjectLabel} for ${classLabel}! Here's what you need to know:`;
  }
  return `Welcome, dear student! Let's explore ${subjectLabel} for ${classLabel} together:`;
}

/** Strip emoji characters from text for clean speech synthesis */
function stripEmoji(text: string): string {
  // Replace emoji Unicode ranges used in lesson content
  return text
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
    .replace(/[\u{2600}-\u{27FF}]/gu, '')
    .replace(/[\u{2B00}-\u{2BFF}]/gu, '')
    .replace(/[\u{FE00}-\u{FEFF}]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function LessonContent({
  classLevel,
  subject,
  onSpeak,
}: LessonContentProps) {
  const { teacherInfo } = useTeacher();
  const { data: backendContent, isLoading } = useLessonContent(classLevel, subject);

  const localPoints =
    classLevel && subject ? getLocalLesson(classLevel, subject) : null;
  const intro =
    classLevel && subject
      ? getTeacherIntro(teacherInfo.name, classLevel, subject)
      : '';

  // Chalk-write animation for local lesson bullet points
  const { revealedLines, isAnimating, currentLineIndex } = useChalkWrite(
    localPoints ?? [],
    22
  );

  // Trigger speech when classLevel/subject changes and we have content
  const prevKeyRef = useRef('');
  useEffect(() => {
    if (!classLevel || !subject || !onSpeak) return;
    const key = `${String(classLevel)}-${String(subject)}`;
    if (key === prevKeyRef.current) return;
    prevKeyRef.current = key;

    const points = getLocalLesson(classLevel, subject);
    if (!points) return;

    const cleanIntro = stripEmoji(getTeacherIntro(teacherInfo.name, classLevel, subject));
    const cleanPoints = points.map(stripEmoji).join('. ');
    const speechText = `${cleanIntro} ${cleanPoints}`;
    onSpeak(speechText);
  }, [classLevel, subject, onSpeak, teacherInfo.name]);

  if (!classLevel || !subject) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">📚</div>
        <p className="chalk-text text-chalk-white/60 text-lg">
          Select a class and subject to start learning!
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-3 py-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-6 w-full bg-chalk-white/10 rounded" />
        ))}
      </div>
    );
  }

  // Parse backend content if available
  const backendLines = backendContent
    ? backendContent.split('\n').filter((l) => l.trim())
    : null;

  return (
    <div className="animate-chalk-appear space-y-3">
      {/* Teacher intro */}
      <p
        className={`chalk-text text-base ${
          teacherInfo.name === 'Mannan' ? 'text-chalk-yellow' : 'text-chalk-pink'
        }`}
      >
        {intro}
      </p>

      <hr className="chalk-divider" />

      {/* Backend content if available */}
      {backendLines && backendLines.length > 0 && (
        <div className="space-y-1.5">
          {backendLines.map((line) => {
            const isHeading = line.startsWith('##');
            const cleanLine = line.replace(/^#+\s*/, '').replace(/^-\s*/, '');
            if (isHeading) {
              return (
                <h3
                  key={cleanLine.slice(0, 40)}
                  className="chalk-heading text-xl text-chalk-yellow mt-3"
                >
                  {cleanLine}
                </h3>
              );
            }
            return (
              <div
                key={cleanLine.slice(0, 40)}
                className="chalk-text text-chalk-white/90 text-base flex items-start gap-2"
              >
                <span className="text-chalk-yellow mt-0.5 flex-shrink-0">—</span>
                <span>{cleanLine}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Local content — chalk-write animated */}
      {localPoints && (
        <div className="space-y-2">
          {localPoints.map((point, i) => {
            const revealed = revealedLines[i] ?? '';
            const isCurrentLine = isAnimating && currentLineIndex === i;
            // Show the line once revealed has started (or animation is done)
            const showLine = revealed.length > 0 || !isAnimating;
            if (!showLine) return null;

            return (
              <div
                key={point.slice(0, 30)}
                className="chalk-text text-chalk-white/90 text-base flex items-start gap-2"
              >
                <span className="text-chalk-yellow flex-shrink-0">
                  {point.split(' ')[0]}
                </span>
                <span>
                  {isAnimating
                    ? revealed.split(' ').slice(1).join(' ')
                    : point.split(' ').slice(1).join(' ')}
                  {isCurrentLine && (
                    <span className="chalk-cursor" aria-hidden="true" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {!backendLines && !localPoints && (
        <div className="text-center py-6">
          <div className="text-3xl mb-2">📝</div>
          <p className="chalk-text text-chalk-white/60">
            Content for this topic is being prepared. Ask your doubt below!
          </p>
        </div>
      )}

      {/* Study tip */}
      <div className="mt-4 p-3 rounded border border-chalk-green/30 bg-chalk-green/5">
        <p className="chalk-text text-chalk-green text-sm">
          💡 <strong>Tip:</strong>{' '}
          {teacherInfo.name === 'Mannan'
            ? 'Practice 5 problems daily — consistency beats cramming! 💪'
            : 'Read each point carefully and make your own notes. Understanding > memorizing! 🌸'}
        </p>
      </div>
    </div>
  );
}
