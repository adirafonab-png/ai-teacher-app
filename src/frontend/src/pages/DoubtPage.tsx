import React, { useState } from 'react';
import { T, T__1 } from '../backend';
import { useTeacher } from '../context/TeacherContext';
import BlackboardPanel from '../components/BlackboardPanel';
import TeacherAvatar from '../components/TeacherAvatar';
import TeacherSelector from '../components/TeacherSelector';
import ClassSelector from '../components/ClassSelector';
import SubjectSelector from '../components/SubjectSelector';
import DoubtInput from '../components/DoubtInput';
import DoubtResponse from '../components/DoubtResponse';
import DoubtHistory from '../components/DoubtHistory';
import { MessageCircle, History, ChevronDown, ChevronUp } from 'lucide-react';

interface DoubtResponseData {
  question: string;
  response: string;
}

export default function DoubtPage() {
  const { teacherInfo, selectedTeacher } = useTeacher();
  const [selectedClass, setSelectedClass] = useState<T | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<T__1 | null>(null);
  const [latestResponse, setLatestResponse] = useState<DoubtResponseData | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showSelectors, setShowSelectors] = useState(true);
  const isMannan = selectedTeacher === 'Mannan';

  const handleClassSelect = (cls: T) => {
    setSelectedClass(cls);
    setSelectedSubject(null);
    setLatestResponse(null);
  };

  const handleSubjectSelect = (subject: T__1) => {
    setSelectedSubject(subject);
    setLatestResponse(null);
  };

  const handleResponse = (response: string, question: string) => {
    setLatestResponse({ question, response });
    setShowSelectors(false);
  };

  return (
    <div className="space-y-4">
      {/* Teacher selector */}
      <div className="board-surface rounded-lg p-3 border border-chalk-white/10">
        <p className="chalk-text text-chalk-white/40 text-xs text-center mb-2 uppercase tracking-wider">
          Choose Your Teacher
        </p>
        <TeacherSelector />
      </div>

      {/* Class & Subject selector */}
      <div className="board-surface rounded-lg border border-chalk-white/10 overflow-hidden">
        <button
          onClick={() => setShowSelectors(!showSelectors)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-chalk-white/5 transition-colors"
        >
          <span className="chalk-text text-chalk-white/70 text-sm font-semibold">
            {selectedClass && selectedSubject
              ? `📚 ${selectedClass === T.jee ? 'JEE' : selectedClass === T.neet ? 'NEET' : selectedClass.replace('class', 'Class ')} · ${selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)}`
              : '📚 Select Class & Subject'}
          </span>
          {showSelectors
            ? <ChevronUp className="w-4 h-4 text-chalk-white/40" />
            : <ChevronDown className="w-4 h-4 text-chalk-white/40" />
          }
        </button>

        {showSelectors && (
          <div className="px-4 pb-4 space-y-4 border-t border-chalk-white/10 pt-3">
            <div>
              <p className="chalk-text text-chalk-white/40 text-xs uppercase tracking-wider mb-2">
                Select Class
              </p>
              <ClassSelector selectedClass={selectedClass} onSelectClass={handleClassSelect} />
            </div>
            {selectedClass && (
              <div>
                <p className="chalk-text text-chalk-white/40 text-xs uppercase tracking-wider mb-2">
                  Select Subject
                </p>
                <SubjectSelector
                  selectedClass={selectedClass}
                  selectedSubject={selectedSubject}
                  onSelectSubject={handleSubjectSelect}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Blackboard with doubt input */}
      <BlackboardPanel title="Ask Your Doubt">
        <div className="flex gap-3">
          {/* Teacher avatar */}
          <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-2 pt-1">
            <TeacherAvatar
              teacher={selectedTeacher}
              isActive={!!latestResponse}
              isAnimating={!!latestResponse}
              size="md"
              showName
            />
          </div>

          <div className="flex-1 min-w-0 space-y-4">
            {/* Mobile teacher */}
            <div className="sm:hidden flex items-center gap-2">
              <TeacherAvatar
                teacher={selectedTeacher}
                isActive={!!latestResponse}
                isAnimating={!!latestResponse}
                size="sm"
                showName={false}
              />
              <div>
                <span className={`chalk-text font-bold text-sm ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
                  {teacherInfo.name}
                </span>
                <p className="chalk-text text-chalk-white/50 text-xs">
                  {isMannan ? '⚡ Science & Math Expert' : '🌸 Bio & Humanities Expert'}
                </p>
              </div>
            </div>

            {/* Greeting */}
            {!latestResponse && (
              <div className={`p-3 rounded border ${
                isMannan ? 'border-chalk-yellow/25 bg-chalk-yellow/5' : 'border-chalk-pink/25 bg-chalk-pink/5'
              }`}>
                <p className={`chalk-text text-sm ${isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'}`}>
                  {isMannan
                    ? "Yaar! Koi bhi doubt poocho — main hoon na! 🚀 Select your class & subject, then ask away!"
                    : "Dear student, I'm here to help you! 🌸 Please select your class and subject, then ask your question."}
                </p>
              </div>
            )}

            {/* Latest response */}
            {latestResponse && (
              <DoubtResponse
                question={latestResponse.question}
                response={latestResponse.response}
                onDismiss={() => setLatestResponse(null)}
              />
            )}

            {/* Doubt input */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-chalk-white/40" />
                <span className="chalk-text text-chalk-white/40 text-xs uppercase tracking-wider">
                  Your Question
                </span>
              </div>
              <DoubtInput
                classLevel={selectedClass}
                subject={selectedSubject}
                onResponse={handleResponse}
              />
            </div>
          </div>
        </div>
      </BlackboardPanel>

      {/* Doubt history */}
      <div className="board-surface rounded-lg border border-chalk-white/10 overflow-hidden">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-chalk-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-chalk-white/40" />
            <span className="chalk-text text-chalk-white/70 text-sm font-semibold">
              My Doubt History
            </span>
          </div>
          {showHistory
            ? <ChevronUp className="w-4 h-4 text-chalk-white/40" />
            : <ChevronDown className="w-4 h-4 text-chalk-white/40" />
          }
        </button>

        {showHistory && (
          <div className="px-4 pb-4 border-t border-chalk-white/10 pt-3">
            <DoubtHistory />
          </div>
        )}
      </div>
    </div>
  );
}
