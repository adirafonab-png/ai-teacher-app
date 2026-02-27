import React from 'react';
import { Link } from '@tanstack/react-router';
import { BookOpen, MessageCircle, Sparkles, Star, ChevronRight } from 'lucide-react';
import TeacherAvatar from '../components/TeacherAvatar';
import TeacherSelector from '../components/TeacherSelector';
import { useTeacher } from '../context/TeacherContext';

const FEATURES = [
  { icon: '📚', title: 'Classes 1–12', desc: 'All subjects for every grade level' },
  { icon: '🎯', title: 'JEE & NEET', desc: 'Competitive exam preparation' },
  { icon: '🇮🇳', title: 'All Indian Boards', desc: 'CBSE, ICSE, State boards' },
  { icon: '💬', title: 'Ask Doubts', desc: 'Get answers from AI teachers' },
  { icon: '😂', title: 'Fun Learning', desc: 'Jokes, facts & memory tricks' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Learn anywhere, anytime' },
];

export default function HomePage() {
  const { teacherInfo, selectedTeacher } = useTeacher();
  const isMannan = selectedTeacher === 'Mannan';

  return (
    <div className="space-y-6">
      {/* Hero blackboard */}
      <div className="wood-frame board-surface rounded overflow-hidden relative">
        {/* Chalk texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `url('/assets/generated/chalk-texture.dim_800x400.png')`,
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-chalk-white/20 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-chalk-white/20 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-chalk-white/20 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-chalk-white/20 pointer-events-none" />

        <div className="relative z-10 p-5 sm:p-8">
          {/* Title */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-chalk-yellow" />
              <h1 className="chalk-heading text-3xl sm:text-4xl text-chalk-white">
                Welcome to <span className="text-chalk-yellow">Guru Blackboard</span>
              </h1>
              <Star className="w-5 h-5 text-chalk-yellow" />
            </div>
            <p className="chalk-text text-chalk-white/70 text-lg">
              Your free AI classroom — Classes 1 to 12, JEE &amp; NEET
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Sparkles className="w-3 h-3 text-chalk-green" />
              <span className="chalk-text text-chalk-green text-sm">100% Free · No Login Required to Learn</span>
            </div>
          </div>

          {/* Teachers display */}
          <div className="flex justify-center items-end gap-6 sm:gap-16 mb-6">
            <div className="flex flex-col items-center gap-2">
              <TeacherAvatar teacher="Mannan" isActive={isMannan} size="lg" showName />
              <p className="chalk-text text-xs text-chalk-white/50 text-center max-w-[100px]">
                Science &amp; Math
              </p>
            </div>
            <div className="text-center px-2">
              <div className="chalk-heading text-2xl text-chalk-white/40 mb-1">VS</div>
              <div className="chalk-text text-xs text-chalk-white/30">Choose your</div>
              <div className="chalk-text text-xs text-chalk-white/30">teacher!</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TeacherAvatar teacher="Tahira" isActive={!isMannan} size="lg" showName />
              <p className="chalk-text text-xs text-chalk-white/50 text-center max-w-[100px]">
                Bio &amp; Humanities
              </p>
            </div>
          </div>

          {/* Teacher greeting */}
          <div className={`p-3 rounded-lg border mb-5 ${
            isMannan ? 'border-chalk-yellow/30 bg-chalk-yellow/5' : 'border-chalk-pink/30 bg-chalk-pink/5'
          }`}>
            <p className={`chalk-text text-sm text-center ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
              {teacherInfo.greeting}
            </p>
          </div>

          {/* Teacher selector */}
          <div className="mb-6">
            <p className="chalk-text text-chalk-white/50 text-xs text-center mb-3 uppercase tracking-wider">
              Choose Your Teacher
            </p>
            <TeacherSelector />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/learn"
              className={`chalk-btn flex-1 flex items-center justify-center gap-2 text-base min-h-[52px] ${
                isMannan ? 'chalk-btn-primary' : 'chalk-btn-pink'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/doubts"
              className="chalk-btn chalk-btn-secondary flex-1 flex items-center justify-center gap-2 text-base min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5" />
              Ask a Doubt
            </Link>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div>
        <h2 className="chalk-heading text-xl text-chalk-white/70 text-center mb-4">
          ✨ What You Get — Completely Free
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {FEATURES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="board-surface rounded-lg p-3 border border-chalk-white/10 hover:border-chalk-white/20 transition-colors"
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div className="chalk-text font-bold text-chalk-white text-sm">{title}</div>
              <div className="chalk-text text-chalk-white/50 text-xs mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer attribution for mobile */}
      <div className="sm:hidden text-center pb-2">
        <p className="chalk-text text-chalk-white/25 text-xs flex items-center justify-center gap-1">
          Built with <span className="text-chalk-pink">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'guru-blackboard')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-chalk-yellow hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
