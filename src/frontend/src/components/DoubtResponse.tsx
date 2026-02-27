import React from 'react';
import { useTeacher } from '../context/TeacherContext';
import TeacherAvatar from './TeacherAvatar';

interface DoubtResponseProps {
  question: string;
  response: string;
  onDismiss?: () => void;
}

export default function DoubtResponse({ question, response, onDismiss }: DoubtResponseProps) {
  const { teacherInfo, selectedTeacher } = useTeacher();
  const isMannan = selectedTeacher === 'Mannan';

  return (
    <div className={`animate-chalk-appear rounded-lg border-2 p-4 space-y-3 ${
      isMannan ? 'border-chalk-yellow/40 bg-chalk-yellow/5' : 'border-chalk-pink/40 bg-chalk-pink/5'
    }`}>
      {/* Question */}
      <div className="flex items-start gap-2">
        <span className="text-chalk-white/50 chalk-text text-sm flex-shrink-0">Q:</span>
        <p className="chalk-text text-chalk-white/80 text-sm italic">{question}</p>
      </div>

      <hr className="chalk-divider" />

      {/* Teacher response */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <TeacherAvatar teacher={selectedTeacher} isActive isAnimating size="sm" showName={false} />
        </div>
        <div className="flex-1 space-y-1">
          <span className={`chalk-text font-bold text-sm ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
            {teacherInfo.name} says:
          </span>
          <p className="chalk-text text-chalk-white/90 text-base leading-relaxed">
            {response}
          </p>
        </div>
      </div>

      {onDismiss && (
        <button
          onClick={onDismiss}
          className="chalk-btn chalk-btn-secondary text-xs w-full mt-2"
        >
          ✓ Got it! Clear
        </button>
      )}
    </div>
  );
}
