import React from 'react';
import { TeacherName, TEACHERS } from '../context/TeacherContext';

interface TeacherAvatarProps {
  teacher: TeacherName;
  isActive?: boolean;
  isAnimating?: boolean;
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

const sizeMap = {
  sm: { container: 'w-16 h-20', img: 'h-16', name: 'text-sm' },
  md: { container: 'w-24 h-32', img: 'h-24', name: 'text-base' },
  lg: { container: 'w-32 h-44', img: 'h-36', name: 'text-lg' },
};

export default function TeacherAvatar({
  teacher,
  isActive = false,
  isAnimating = false,
  isSpeaking = false,
  size = 'md',
  showName = true,
}: TeacherAvatarProps) {
  const info = TEACHERS[teacher];
  const sizes = sizeMap[size];
  const isMannan = teacher === 'Mannan';

  return (
    <div className={`flex flex-col items-center gap-1 ${sizes.container}`}>
      <div
        className={`relative rounded-full overflow-visible transition-all duration-300 ${
          isActive ? 'drop-shadow-[0_0_16px_rgba(255,240,150,0.6)]' : ''
        } ${isAnimating ? 'animate-pulse-soft' : ''}`}
      >
        <img
          src={info.avatar}
          alt={`${info.name} teacher avatar`}
          className={`${sizes.img} w-auto object-contain drop-shadow-lg`}
          onError={(e) => {
            // Fallback to emoji if image fails
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.className = `${sizes.img} flex items-center justify-center text-4xl`;
              fallback.textContent = isMannan ? '👨‍🏫' : '👩‍🏫';
              parent.appendChild(fallback);
            }
          }}
        />
        {isActive && !isSpeaking && (
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-chalk-yellow animate-pulse" />
        )}
      </div>

      {showName && (
        <span
          className={`chalk-text ${sizes.name} font-semibold ${
            isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'
          }`}
        >
          {info.name}
        </span>
      )}

      {/* Sound-wave indicator when speaking */}
      {isSpeaking && (
        <div className="sound-wave mt-0.5">
          <div
            className="sound-wave-bar"
            style={{
              backgroundColor: isMannan
                ? 'oklch(0.92 0.14 95)'
                : 'oklch(0.85 0.12 350)',
            }}
          />
          <div
            className="sound-wave-bar"
            style={{
              backgroundColor: isMannan
                ? 'oklch(0.92 0.14 95)'
                : 'oklch(0.85 0.12 350)',
            }}
          />
          <div
            className="sound-wave-bar"
            style={{
              backgroundColor: isMannan
                ? 'oklch(0.92 0.14 95)'
                : 'oklch(0.85 0.12 350)',
            }}
          />
        </div>
      )}
    </div>
  );
}
