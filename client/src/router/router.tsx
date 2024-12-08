// src/router/router.tsx
import {
  createRouter,
  createRoute,
  RouterProvider,
  createRootRoute,
} from '@tanstack/react-router';
import MainLayout from '../layouts/main-layout';
import { PublicRoute, PrivateRoute } from './route-guards';

// Define the root route with MainLayout
const rootRoute = createRootRoute({
  component: MainLayout,
});

// Define public routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => (
    <PublicRoute>
      <div>Login</div>
    </PublicRoute>
  ),
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: () => (
    <PublicRoute>
      <div>Signup</div>
    </PublicRoute>
  ),
});

// Define private routes
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <PrivateRoute>
      <div>Dashboard</div>
    </PrivateRoute>
  ),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => (
    <PrivateRoute>
      <div>Signup</div>
    </PrivateRoute>
  ),
});

// Add all routes to the router
const routeTree = rootRoute.addChildren([
  loginRoute,
  signupRoute,
  dashboardRoute,
  profileRoute,
]);

// Create the router
const router = createRouter({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
