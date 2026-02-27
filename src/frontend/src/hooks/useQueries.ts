import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { T, T__1, type TeacherProfile, type DoubtQuestion } from '../backend';

// ── Teacher Profiles ──────────────────────────────────────────────────────────

export function useTeacherProfiles() {
  const { actor, isFetching } = useActor();

  return useQuery<TeacherProfile[]>({
    queryKey: ['teacherProfiles'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTeacherProfiles();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 10,
  });
}

export function useTeacherSubjects(teacherName: string) {
  const { actor, isFetching } = useActor();

  return useQuery<T__1[] | null>({
    queryKey: ['teacherSubjects', teacherName],
    queryFn: async () => {
      if (!actor || !teacherName) return null;
      return actor.getTeacherSubjects(teacherName);
    },
    enabled: !!actor && !isFetching && !!teacherName,
    staleTime: 1000 * 60 * 10,
  });
}

export function useTeacherClasses(teacherName: string) {
  const { actor, isFetching } = useActor();

  return useQuery<T[] | null>({
    queryKey: ['teacherClasses', teacherName],
    queryFn: async () => {
      if (!actor || !teacherName) return null;
      return actor.getTeacherClasses(teacherName);
    },
    enabled: !!actor && !isFetching && !!teacherName,
    staleTime: 1000 * 60 * 10,
  });
}

// ── Lesson Content ────────────────────────────────────────────────────────────

export function useLessonContent(classLevel: T | null, subject: T__1 | null) {
  const { actor, isFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['lessonContent', classLevel, subject],
    queryFn: async () => {
      if (!actor || !classLevel || !subject) return null;
      return actor.getLessonContent(classLevel, subject);
    },
    enabled: !!actor && !isFetching && !!classLevel && !!subject,
    staleTime: 1000 * 60 * 5,
  });
}

// ── Doubt History ─────────────────────────────────────────────────────────────

export function useMyDoubtHistory() {
  const { actor, isFetching } = useActor();

  return useQuery<DoubtQuestion[]>({
    queryKey: ['myDoubtHistory'],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getMyDoubtHistory();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 0,
  });
}

// ── Submit Doubt ──────────────────────────────────────────────────────────────

export function useSubmitDoubt() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<DoubtQuestion, Error, {
    question: string;
    teacherName: string;
    classLevel: T;
    subject: T__1;
  }>({
    mutationFn: async ({ question, teacherName, classLevel, subject }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitDoubt(question, teacherName, classLevel, subject);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myDoubtHistory'] });
    },
  });
}
