import React from 'react';
import { useTeacher } from '../context/TeacherContext';
import TeacherAvatar from './TeacherAvatar';
import { EngagementItem } from '../data/engagementContent';

interface EngagementDisplayProps {
  item: EngagementItem & { displayContent: string };
  onNext: () => void;
  onDismiss: () => void;
}

const TYPE_LABELS: Record<string, { label: string; emoji: string; colorClass: string }> = {
  joke: { label: 'Joke', emoji: '😂', colorClass: 'text-chalk-yellow' },
  fact: { label: 'Fun Fact', emoji: '🤯', colorClass: 'text-chalk-blue' },
  mnemonic: { label: 'Memory Trick', emoji: '🧠', colorClass: 'text-chalk-green' },
};

export default function EngagementDisplay({ item, onNext, onDismiss }: EngagementDisplayProps) {
  const { teacherInfo, selectedTeacher } = useTeacher();
  const isMannan = selectedTeacher === 'Mannan';
  const typeInfo = TYPE_LABELS[item.type] || TYPE_LABELS['fact'];

  return (
    <div className={`animate-chalk-appear rounded-lg border-2 p-4 space-y-3 ${
      isMannan ? 'border-chalk-yellow/50 bg-chalk-yellow/5' : 'border-chalk-pink/50 bg-chalk-pink/5'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl">{typeInfo.emoji}</span>
        <span className={`chalk-heading text-lg ${typeInfo.colorClass}`}>
          {typeInfo.label}
        </span>
        <span className="ml-auto text-chalk-white/30 chalk-text text-xs">
          from {teacherInfo.name}
        </span>
      </div>

      <hr className="chalk-divider" />

      {/* Content with teacher avatar */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <TeacherAvatar teacher={selectedTeacher} isActive isAnimating size="sm" showName={false} />
        </div>
        <div className="flex-1">
          <p className="chalk-text text-chalk-white/95 text-base leading-relaxed">
            {item.displayContent}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <button
          onClick={onNext}
          className={`chalk-btn flex-1 text-sm ${isMannan ? 'chalk-btn-primary' : 'chalk-btn-pink'}`}
        >
          🎲 Another One!
        </button>
        <button
          onClick={onDismiss}
          className="chalk-btn chalk-btn-secondary text-sm flex-1"
        >
          ✓ Got it!
        </button>
      </div>
    </div>
  );
}
