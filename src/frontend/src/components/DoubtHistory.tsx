import React from 'react';
import { useMyDoubtHistory } from '../hooks/useQueries';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { T, T__1 } from '../backend';
import { TEACHERS } from '../context/TeacherContext';

function classLabel(cls: T): string {
  if (cls === T.jee) return 'JEE';
  if (cls === T.neet) return 'NEET';
  return cls.replace('class', 'Class ');
}

function subjectLabel(sub: T__1): string {
  const map: Record<T__1, string> = {
    [T__1.mathematics]: 'Mathematics',
    [T__1.science]: 'Science',
    [T__1.physics]: 'Physics',
    [T__1.chemistry]: 'Chemistry',
    [T__1.biology]: 'Biology',
    [T__1.english]: 'English',
    [T__1.history]: 'History',
    [T__1.geography]: 'Geography',
    [T__1.hindi]: 'Hindi',
    [T__1.socialStudies]: 'Social Studies',
    [T__1.computerScience]: 'Computer Science',
    [T__1.economics]: 'Economics',
    [T__1.politicalScience]: 'Political Science',
  };
  return map[sub] || sub;
}

export default function DoubtHistory() {
  const { data: doubts, isLoading } = useMyDoubtHistory();

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-20 w-full bg-chalk-white/10 rounded" />
        ))}
      </div>
    );
  }

  if (!doubts || doubts.length === 0) {
    return (
      <div className="text-center py-6">
        <div className="text-3xl mb-2">💬</div>
        <p className="chalk-text text-chalk-white/50 text-sm">
          No doubts yet. Ask your first question above!
        </p>
        <p className="chalk-text text-chalk-white/30 text-xs mt-1">
          (Login required to save doubts)
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-64 scrollbar-chalk">
      <div className="space-y-3 pr-2">
        {[...doubts].reverse().map((doubt) => {
          const isMannan = doubt.teacher === 'Mannan';
          const teacherInfo = TEACHERS[doubt.teacher as 'Mannan' | 'Tahira'];
          return (
            <div
              key={String(doubt.id)}
              className={`rounded-lg border p-3 space-y-2 ${
                isMannan ? 'border-chalk-yellow/25 bg-chalk-yellow/5' : 'border-chalk-pink/25 bg-chalk-pink/5'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`chalk-text text-xs font-bold ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
                  {teacherInfo?.name || doubt.teacher}
                </span>
                <span className="chalk-text text-xs text-chalk-white/40">
                  {classLabel(doubt.classLevel)} · {subjectLabel(doubt.subject)}
                </span>
              </div>
              <p className="chalk-text text-chalk-white/80 text-sm italic">
                Q: {doubt.question}
              </p>
              <p className="chalk-text text-chalk-white/70 text-sm">
                A: {doubt.response}
              </p>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
