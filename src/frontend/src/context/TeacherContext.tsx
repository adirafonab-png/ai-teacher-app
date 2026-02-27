import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TeacherName = 'Mannan' | 'Tahira';

export interface TeacherInfo {
  name: TeacherName;
  gender: 'male' | 'female';
  avatar: string;
  greeting: string;
  personality: string;
  color: string;
  subjects: string[];
}

export const TEACHERS: Record<TeacherName, TeacherInfo> = {
  Mannan: {
    name: 'Mannan',
    gender: 'male',
    avatar: '/assets/generated/mannan-avatar.dim_256x512.png',
    greeting: "Arre yaar! 🎉 Main hoon Mannan — your fun science & math buddy! Ready to crack some tough problems? Let's go! 🚀",
    personality: 'Energetic, humorous, uses jokes and fun analogies. Loves science and math.',
    color: 'chalk-yellow',
    subjects: ['Mathematics', 'Science', 'Physics', 'Chemistry'],
  },
  Tahira: {
    name: 'Tahira',
    gender: 'female',
    avatar: '/assets/generated/tahira-avatar.dim_256x512.png',
    greeting: "Namaste! 🌸 I'm Tahira — your warm and encouraging teacher. Together we'll make learning beautiful! ✨",
    personality: 'Warm, encouraging, uses stories and examples. Loves biology, English, and humanities.',
    color: 'chalk-pink',
    subjects: ['Biology', 'English', 'History', 'Geography', 'Hindi', 'Social Studies'],
  },
};

interface TeacherContextType {
  selectedTeacher: TeacherName;
  setSelectedTeacher: (name: TeacherName) => void;
  teacherInfo: TeacherInfo;
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export function TeacherProvider({ children }: { children: ReactNode }) {
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherName>('Mannan');

  return (
    <TeacherContext.Provider
      value={{
        selectedTeacher,
        setSelectedTeacher,
        teacherInfo: TEACHERS[selectedTeacher],
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
}

export function useTeacher() {
  const ctx = useContext(TeacherContext);
  if (!ctx) throw new Error('useTeacher must be used within TeacherProvider');
  return ctx;
}
