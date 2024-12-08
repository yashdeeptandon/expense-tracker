// src/components/Header.tsx
import { useAuth } from '../../context/auth-context.tsx';
import { Button } from '../ui/button.tsx';
import { SidebarTrigger } from '../ui/sidebar.tsx';

export default function Header() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className="w-full h-20 flex justify-between p-4 bg-gray-800 text-white">
      <SidebarTrigger />
      <h1>Expense Tracker</h1>
      <div>
        {isAuthenticated ? (
          <Button onClick={logout} className="px-4 py-2 bg-red-500">
            Logout
          </Button>
        ) : (
          <Button onClick={login} className="px-4 py-2 bg-green-500">
            Login
          </Button>
        )}
      </div>
    </header>
  );
}
