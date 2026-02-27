import React from 'react';
import { useTeacher } from '../context/TeacherContext';
import { Sparkles } from 'lucide-react';

interface SurpriseMeButtonProps {
  onClick: () => void;
  isActive?: boolean;
}

export default function SurpriseMeButton({ onClick, isActive = false }: SurpriseMeButtonProps) {
  const { selectedTeacher } = useTeacher();
  const isMannan = selectedTeacher === 'Mannan';

  return (
    <button
      onClick={onClick}
      className={`chalk-btn w-full flex items-center justify-center gap-2 text-base min-h-[48px] transition-all ${
        isActive
          ? isMannan ? 'chalk-btn-primary animate-glow-pulse' : 'chalk-btn-pink animate-glow-pulse'
          : isMannan ? 'chalk-btn-primary' : 'chalk-btn-pink'
      }`}
      aria-label="Get a surprise joke, fact, or memory trick"
    >
      <Sparkles className="w-4 h-4" />
      <span>Surprise Me! 🎉</span>
    </button>
  );
}
