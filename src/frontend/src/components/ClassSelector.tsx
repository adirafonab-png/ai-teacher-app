import React from 'react';
import { T } from '../backend';

interface ClassSelectorProps {
  selectedClass: T | null;
  onSelectClass: (cls: T) => void;
}

const CLASS_GROUPS = [
  {
    label: 'Primary (1–5)',
    classes: [
      { value: T.class1, label: 'Class 1' },
      { value: T.class2, label: 'Class 2' },
      { value: T.class3, label: 'Class 3' },
      { value: T.class4, label: 'Class 4' },
      { value: T.class5, label: 'Class 5' },
    ],
  },
  {
    label: 'Middle (6–8)',
    classes: [
      { value: T.class6, label: 'Class 6' },
      { value: T.class7, label: 'Class 7' },
      { value: T.class8, label: 'Class 8' },
    ],
  },
  {
    label: 'Secondary (9–10)',
    classes: [
      { value: T.class9, label: 'Class 9' },
      { value: T.class10, label: 'Class 10' },
    ],
  },
  {
    label: 'Senior (11–12)',
    classes: [
      { value: T.class11, label: 'Class 11' },
      { value: T.class12, label: 'Class 12' },
    ],
  },
  {
    label: 'Competitive',
    classes: [
      { value: T.jee, label: 'JEE' },
      { value: T.neet, label: 'NEET' },
    ],
  },
];

export default function ClassSelector({ selectedClass, onSelectClass }: ClassSelectorProps) {
  return (
    <div className="space-y-3">
      {CLASS_GROUPS.map((group) => (
        <div key={group.label}>
          <div className="chalk-text text-xs text-chalk-white/50 mb-1.5 uppercase tracking-wider">{group.label}</div>
          <div className="flex flex-wrap gap-2">
            {group.classes.map(({ value, label }) => {
              const isSelected = selectedClass === value;
              const isCompetitive = value === T.jee || value === T.neet;
              return (
                <button
                  key={value}
                  onClick={() => onSelectClass(value)}
                  className={`chalk-btn min-h-[44px] px-3 py-1.5 text-sm transition-all ${
                    isSelected
                      ? isCompetitive
                        ? 'chalk-btn-pink'
                        : 'chalk-btn-primary'
                      : 'chalk-btn-secondary opacity-70 hover:opacity-100'
                  }`}
                  aria-pressed={isSelected}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
