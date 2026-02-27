import { useState, useCallback, useRef, useEffect } from 'react';

type Gender = 'male' | 'female';

interface UseSpeechReturn {
  speak: (text: string, gender: Gender) => void;
  stop: () => void;
  replay: () => void;
  isSpeaking: boolean;
  isMuted: boolean;
  toggleMute: () => void;
}

const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

function pickVoice(gender: Gender): SpeechSynthesisVoice | null {
  if (!isSupported) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const genderKeyword = gender === 'male' ? 'male' : 'female';
  const matched = voices.find((v) =>
    v.name.toLowerCase().includes(genderKeyword)
  );
  if (matched) return matched;

  // Heuristic: common voice names
  if (gender === 'male') {
    const heuristic = voices.find(
      (v) =>
        v.name.includes('David') ||
        v.name.includes('James') ||
        v.name.includes('Daniel') ||
        v.name.includes('Google UK English Male') ||
        v.name.includes('Alex')
    );
    if (heuristic) return heuristic;
  } else {
    const heuristic = voices.find(
      (v) =>
        v.name.includes('Samantha') ||
        v.name.includes('Karen') ||
        v.name.includes('Moira') ||
        v.name.includes('Google UK English Female') ||
        v.name.includes('Victoria')
    );
    if (heuristic) return heuristic;
  }

  return voices[0] ?? null;
}

export function useSpeech(): UseSpeechReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const lastTextRef = useRef<string>('');
  const lastGenderRef = useRef<Gender>('male');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  // Voices can load asynchronously on some browsers
  const [, setVoicesLoaded] = useState(0);

  useEffect(() => {
    if (!isSupported) return;
    const handler = () => setVoicesLoaded((n) => n + 1);
    window.speechSynthesis.addEventListener('voiceschanged', handler);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
    };
  }, []);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string, gender: Gender) => {
      if (!isSupported || isMuted) return;

      lastTextRef.current = text;
      lastGenderRef.current = gender;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      const voice = pickVoice(gender);
      if (voice) {
        utterance.voice = voice;
      }

      if (gender === 'male') {
        utterance.pitch = 0.85;
        utterance.rate = 0.95;
      } else {
        utterance.pitch = 1.2;
        utterance.rate = 1.0;
      }

      utterance.volume = 1;
      utterance.lang = 'en-IN';

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isMuted]
  );

  const replay = useCallback(() => {
    if (!lastTextRef.current) return;
    speak(lastTextRef.current, lastGenderRef.current);
  }, [speak]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (!prev) {
        // Muting — stop any ongoing speech
        if (isSupported) window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      return !prev;
    });
  }, []);

  return { speak, stop, replay, isSpeaking, isMuted, toggleMute };
}
