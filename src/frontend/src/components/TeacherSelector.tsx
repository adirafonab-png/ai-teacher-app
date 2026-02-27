import React from 'react';
import { useTeacher, TeacherName, TEACHERS } from '../context/TeacherContext';
import TeacherAvatar from './TeacherAvatar';

export default function TeacherSelector() {
  const { selectedTeacher, setSelectedTeacher } = useTeacher();

  return (
    <div className="flex gap-3 justify-center">
      {(['Mannan', 'Tahira'] as TeacherName[]).map((name) => {
        const info = TEACHERS[name];
        const isSelected = selectedTeacher === name;
        const isMannan = name === 'Mannan';

        return (
          <button
            key={name}
            onClick={() => setSelectedTeacher(name)}
            className={`teacher-card flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 min-w-[100px] ${
              isSelected
                ? isMannan
                  ? 'border-chalk-yellow bg-chalk-yellow/10 active'
                  : 'border-chalk-pink bg-chalk-pink/10 active'
                : 'border-chalk-white/20 bg-board-dark/40 hover:border-chalk-white/40'
            }`}
            aria-pressed={isSelected}
            aria-label={`Select ${name} as teacher`}
          >
            <TeacherAvatar teacher={name} isActive={isSelected} size="sm" showName={false} />
            <div className="text-center">
              <div className={`chalk-text font-bold text-base ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
                {name}
              </div>
              <div className="chalk-text text-xs text-chalk-white/60 leading-tight mt-0.5">
                {isMannan ? '⚡ Science & Math' : '🌸 Bio & Humanities'}
              </div>
            </div>
            {isSelected && (
              <div className={`text-xs chalk-text ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
                ✓ Selected
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
