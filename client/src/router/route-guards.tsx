// src/router/RouteGuards.tsx
import { Navigate } from '@tanstack/react-router';
import { useAuth } from '../context/auth-context';
import MainLayout from '../layouts/main-layout';

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" /> : <>{children}</>;
};

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <Navigate to="/" />
  );
};
