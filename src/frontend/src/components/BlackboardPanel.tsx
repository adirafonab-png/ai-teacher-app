import React from 'react';

interface BlackboardPanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function BlackboardPanel({ children, className = '', title }: BlackboardPanelProps) {
  return (
    <div className={`wood-frame board-surface relative overflow-hidden ${className}`}>
      {/* Chalk dust texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('/assets/generated/chalk-texture.dim_800x400.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay',
        }}
      />
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-chalk-white/20 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-chalk-white/20 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-chalk-white/20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-chalk-white/20 pointer-events-none" />

      {title && (
        <div className="px-4 pt-4 pb-2">
          <h2 className="chalk-heading text-2xl text-chalk-yellow text-center">{title}</h2>
          <div className="chalk-divider mt-2" />
        </div>
      )}

      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  );
}
