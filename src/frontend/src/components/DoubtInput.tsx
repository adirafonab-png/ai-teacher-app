import React, { useState } from 'react';
import { T, T__1 } from '../backend';
import { useSubmitDoubt } from '../hooks/useQueries';
import { useTeacher } from '../context/TeacherContext';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Loader2, Send } from 'lucide-react';

interface DoubtInputProps {
  classLevel: T | null;
  subject: T__1 | null;
  onResponse?: (response: string, question: string) => void;
}

export default function DoubtInput({ classLevel, subject, onResponse }: DoubtInputProps) {
  const [question, setQuestion] = useState('');
  const { teacherInfo } = useTeacher();
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const submitDoubt = useSubmitDoubt();

  const isAuthenticated = !!identity;
  const isMannan = teacherInfo.name === 'Mannan';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    if (!classLevel || !subject) return;
    if (!isAuthenticated) {
      login();
      return;
    }

    try {
      const result = await submitDoubt.mutateAsync({
        question: question.trim(),
        teacherName: teacherInfo.name,
        classLevel,
        subject,
      });
      onResponse?.(result.response, question.trim());
      setQuestion('');
    } catch (err) {
      console.error('Failed to submit doubt:', err);
    }
  };

  const placeholder = isMannan
    ? 'Yaar, koi bhi doubt poocho! (Ask any doubt...)'
    : 'Dear student, please ask your question here... 🌸';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="chalk-input resize-none"
          disabled={submitDoubt.isPending}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e as unknown as React.FormEvent);
            }
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        {!classLevel || !subject ? (
          <p className="chalk-text text-chalk-white/50 text-sm flex-1">
            ⚠️ Please select a class and subject first
          </p>
        ) : !isAuthenticated ? (
          <p className="chalk-text text-chalk-white/50 text-sm flex-1">
            🔐 Login to save your doubts
          </p>
        ) : null}

        <div className="flex gap-2 ml-auto">
          {!isAuthenticated && (
            <button
              type="button"
              onClick={login}
              disabled={isLoggingIn}
              className={`chalk-btn chalk-btn-secondary text-sm flex items-center gap-1.5 ${isLoggingIn ? 'opacity-50' : ''}`}
            >
              {isLoggingIn ? <Loader2 className="w-3 h-3 animate-spin" /> : '🔐'}
              {isLoggingIn ? 'Logging in...' : 'Login'}
            </button>
          )}

          <button
            type="submit"
            disabled={!question.trim() || submitDoubt.isPending || !classLevel || !subject}
            className={`chalk-btn flex items-center gap-2 ${
              isMannan ? 'chalk-btn-primary' : 'chalk-btn-pink'
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {submitDoubt.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {submitDoubt.isPending ? 'Asking...' : 'Ask Doubt'}
          </button>
        </div>
      </div>

      {submitDoubt.isError && (
        <p className="chalk-text text-destructive text-sm">
          ❌ Failed to submit. Please try again.
        </p>
      )}
    </form>
  );
}
