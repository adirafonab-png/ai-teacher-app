import React, { useState, useCallback } from 'react';
import { T, T__1 } from '../backend';
import { useTeacher } from '../context/TeacherContext';
import BlackboardPanel from '../components/BlackboardPanel';
import TeacherAvatar from '../components/TeacherAvatar';
import TeacherSelector from '../components/TeacherSelector';
import ClassSelector from '../components/ClassSelector';
import SubjectSelector from '../components/SubjectSelector';
import LessonContent from '../components/LessonContent';
import SurpriseMeButton from '../components/SurpriseMeButton';
import EngagementDisplay from '../components/EngagementDisplay';
import { getRandomEngagement, EngagementItem } from '../data/engagementContent';
import { useSpeech } from '../hooks/useSpeech';
import { ChevronDown, ChevronUp, Volume2, VolumeX, RotateCcw } from 'lucide-react';

type SurpriseItem = EngagementItem & { displayContent: string };

// Map T__1 enum to engagementContent keys
function subjectToEngagementKey(subject: T__1): string {
  const map: Record<T__1, string> = {
    [T__1.mathematics]: 'mathematics',
    [T__1.science]: 'science',
    [T__1.physics]: 'physics',
    [T__1.chemistry]: 'chemistry',
    [T__1.biology]: 'biology',
    [T__1.english]: 'english',
    [T__1.history]: 'history',
    [T__1.geography]: 'geography',
    [T__1.hindi]: 'hindi',
    [T__1.socialStudies]: 'socialStudies',
    [T__1.computerScience]: 'computerScience',
    [T__1.economics]: 'economics',
    [T__1.politicalScience]: 'politicalScience',
  };
  return map[subject] || 'science';
}

export default function LearningPage() {
  const { teacherInfo, selectedTeacher } = useTeacher();
  const [selectedClass, setSelectedClass] = useState<T | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<T__1 | null>(null);
  const [surpriseItem, setSurpriseItem] = useState<SurpriseItem | null>(null);
  const [showClassSelector, setShowClassSelector] = useState(true);
  const isMannan = selectedTeacher === 'Mannan';

  const speech = useSpeech();

  const handleClassSelect = (cls: T) => {
    setSelectedClass(cls);
    setSelectedSubject(null);
    setSurpriseItem(null);
    speech.stop();
  };

  const handleSubjectSelect = (subject: T__1) => {
    setSelectedSubject(subject);
    setSurpriseItem(null);
  };

  const handleSurprise = () => {
    const key = selectedSubject ? subjectToEngagementKey(selectedSubject) : 'science';
    const item = getRandomEngagement(key, selectedTeacher);
    setSurpriseItem(item);
  };

  const handleSpeak = useCallback(
    (text: string) => {
      speech.speak(text, teacherInfo.gender);
    },
    [speech, teacherInfo.gender]
  );

  return (
    <div className="space-y-4">
      {/* Teacher selector strip */}
      <div className="board-surface rounded-lg p-3 border border-chalk-white/10">
        <p className="chalk-text text-chalk-white/40 text-xs text-center mb-2 uppercase tracking-wider">
          Your Teacher
        </p>
        <TeacherSelector />
      </div>

      {/* Class & Subject selector panel */}
      <div className="board-surface rounded-lg border border-chalk-white/10 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowClassSelector(!showClassSelector)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-chalk-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="chalk-text text-chalk-white/70 text-sm font-semibold">
              {selectedClass
                ? `📚 ${selectedClass === T.jee ? 'JEE' : selectedClass === T.neet ? 'NEET' : selectedClass.replace('class', 'Class ')}`
                : '📚 Select Class & Subject'}
            </span>
            {selectedSubject && (
              <span
                className={`chalk-text text-xs px-2 py-0.5 rounded-full border ${
                  isMannan
                    ? 'border-chalk-yellow/40 text-chalk-yellow'
                    : 'border-chalk-pink/40 text-chalk-pink'
                }`}
              >
                {selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)}
              </span>
            )}
          </div>
          {showClassSelector ? (
            <ChevronUp className="w-4 h-4 text-chalk-white/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-chalk-white/40" />
          )}
        </button>

        {showClassSelector && (
          <div className="px-4 pb-4 space-y-4 border-t border-chalk-white/10 pt-3">
            <div>
              <p className="chalk-text text-chalk-white/40 text-xs uppercase tracking-wider mb-2">
                Select Class
              </p>
              <ClassSelector
                selectedClass={selectedClass}
                onSelectClass={handleClassSelect}
              />
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

      {/* Main blackboard */}
      <BlackboardPanel>
        {/* Speech controls bar */}
        <div className="flex items-center gap-2 mb-3 justify-end">
          <span className="chalk-text text-chalk-white/30 text-xs mr-1">
            {speech.isSpeaking ? 'Speaking…' : speech.isMuted ? 'Muted' : 'Voice'}
          </span>
          <button
            type="button"
            onClick={speech.toggleMute}
            title={speech.isMuted ? 'Unmute teacher' : 'Mute teacher'}
            className={`chalk-icon-btn ${!speech.isMuted ? 'active' : ''}`}
          >
            {speech.isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={speech.replay}
            title="Replay explanation"
            className="chalk-icon-btn"
            disabled={speech.isMuted}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-3">
          {/* Teacher avatar sidebar */}
          <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-2 pt-2">
            <TeacherAvatar
              teacher={selectedTeacher}
              isActive={!!selectedSubject}
              isSpeaking={speech.isSpeaking}
              size="md"
              showName
            />
          </div>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            {/* Mobile teacher name */}
            <div className="sm:hidden flex items-center gap-2 mb-3">
              <TeacherAvatar
                teacher={selectedTeacher}
                isActive={!!selectedSubject}
                isSpeaking={speech.isSpeaking}
                size="sm"
                showName={false}
              />
              <span
                className={`chalk-text font-bold text-sm ${
                  isMannan ? 'text-chalk-yellow' : 'text-chalk-pink'
                }`}
              >
                {teacherInfo.name}
              </span>
            </div>

            <LessonContent
              classLevel={selectedClass}
              subject={selectedSubject}
              onSpeak={handleSpeak}
            />
          </div>
        </div>
      </BlackboardPanel>

      {/* Surprise Me section */}
      <div className="space-y-3">
        <SurpriseMeButton onClick={handleSurprise} isActive={!!surpriseItem} />
        {surpriseItem && (
          <EngagementDisplay
            item={surpriseItem}
            onNext={handleSurprise}
            onDismiss={() => setSurpriseItem(null)}
          />
        )}
      </div>
    </div>
  );
}
