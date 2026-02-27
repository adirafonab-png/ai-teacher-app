import React from 'react';
import { T, T__1 } from '../backend';

interface SubjectSelectorProps {
  selectedClass: T | null;
  selectedSubject: T__1 | null;
  onSelectSubject: (subject: T__1) => void;
}

const SUBJECT_MAP: Record<string, { value: T__1; label: string; emoji: string }[]> = {
  primary: [
    { value: T__1.mathematics, label: 'Mathematics', emoji: '🔢' },
    { value: T__1.science, label: 'Science', emoji: '🔬' },
    { value: T__1.english, label: 'English', emoji: '📖' },
    { value: T__1.hindi, label: 'Hindi', emoji: '🇮🇳' },
    { value: T__1.socialStudies, label: 'Social Studies', emoji: '🌍' },
  ],
  middle: [
    { value: T__1.mathematics, label: 'Mathematics', emoji: '🔢' },
    { value: T__1.science, label: 'Science', emoji: '🔬' },
    { value: T__1.english, label: 'English', emoji: '📖' },
    { value: T__1.hindi, label: 'Hindi', emoji: '🇮🇳' },
    { value: T__1.history, label: 'History', emoji: '🏛️' },
    { value: T__1.geography, label: 'Geography', emoji: '🗺️' },
    { value: T__1.socialStudies, label: 'Social Studies', emoji: '🌍' },
  ],
  secondary: [
    { value: T__1.mathematics, label: 'Mathematics', emoji: '🔢' },
    { value: T__1.science, label: 'Science', emoji: '🔬' },
    { value: T__1.physics, label: 'Physics', emoji: '⚡' },
    { value: T__1.chemistry, label: 'Chemistry', emoji: '🧪' },
    { value: T__1.biology, label: 'Biology', emoji: '🧬' },
    { value: T__1.english, label: 'English', emoji: '📖' },
    { value: T__1.hindi, label: 'Hindi', emoji: '🇮🇳' },
    { value: T__1.history, label: 'History', emoji: '🏛️' },
    { value: T__1.geography, label: 'Geography', emoji: '🗺️' },
    { value: T__1.socialStudies, label: 'Social Studies', emoji: '🌍' },
  ],
  senior: [
    { value: T__1.mathematics, label: 'Mathematics', emoji: '🔢' },
    { value: T__1.physics, label: 'Physics', emoji: '⚡' },
    { value: T__1.chemistry, label: 'Chemistry', emoji: '🧪' },
    { value: T__1.biology, label: 'Biology', emoji: '🧬' },
    { value: T__1.english, label: 'English', emoji: '📖' },
    { value: T__1.hindi, label: 'Hindi', emoji: '🇮🇳' },
    { value: T__1.history, label: 'History', emoji: '🏛️' },
    { value: T__1.geography, label: 'Geography', emoji: '🗺️' },
    { value: T__1.economics, label: 'Economics', emoji: '📊' },
    { value: T__1.politicalScience, label: 'Political Science', emoji: '⚖️' },
    { value: T__1.computerScience, label: 'Computer Science', emoji: '💻' },
  ],
  jee: [
    { value: T__1.physics, label: 'Physics', emoji: '⚡' },
    { value: T__1.chemistry, label: 'Chemistry', emoji: '🧪' },
    { value: T__1.mathematics, label: 'Mathematics', emoji: '🔢' },
  ],
  neet: [
    { value: T__1.physics, label: 'Physics', emoji: '⚡' },
    { value: T__1.chemistry, label: 'Chemistry', emoji: '🧪' },
    { value: T__1.biology, label: 'Biology', emoji: '🧬' },
  ],
};

function getSubjectGroup(cls: T | null): string {
  if (!cls) return 'primary';
  if (cls === T.jee) return 'jee';
  if (cls === T.neet) return 'neet';
  if ([T.class1, T.class2, T.class3, T.class4, T.class5].includes(cls)) return 'primary';
  if ([T.class6, T.class7, T.class8].includes(cls)) return 'middle';
  if ([T.class9, T.class10].includes(cls)) return 'secondary';
  return 'senior';
}

export default function SubjectSelector({ selectedClass, selectedSubject, onSelectSubject }: SubjectSelectorProps) {
  const group = getSubjectGroup(selectedClass);
  const subjects = SUBJECT_MAP[group] || SUBJECT_MAP.primary;

  return (
    <div className="flex flex-wrap gap-2">
      {subjects.map(({ value, label, emoji }) => {
        const isSelected = selectedSubject === value;
        return (
          <button
            key={value}
            onClick={() => onSelectSubject(value)}
            className={`chalk-btn min-h-[44px] px-3 py-1.5 text-sm flex items-center gap-1.5 transition-all ${
              isSelected ? 'chalk-btn-primary' : 'chalk-btn-secondary opacity-70 hover:opacity-100'
            }`}
            aria-pressed={isSelected}
          >
            <span>{emoji}</span>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
