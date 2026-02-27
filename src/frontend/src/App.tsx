import React from 'react';
import { createRouter, createRoute, createRootRoute, RouterProvider } from '@tanstack/react-router';
import { TeacherProvider } from './context/TeacherContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import DoubtPage from './pages/DoubtPage';

// Root route with Layout as shell
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn',
  component: LearningPage,
});

const doubtsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doubts',
  component: DoubtPage,
});

const routeTree = rootRoute.addChildren([indexRoute, learnRoute, doubtsRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <TeacherProvider>
      <RouterProvider router={router} />
    </TeacherProvider>
  );
}
