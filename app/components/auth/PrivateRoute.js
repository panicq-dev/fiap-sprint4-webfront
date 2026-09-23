'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../features/auth/hooks/useAuth';

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const usuarioLogado = isAuthenticated();

    if (!usuarioLogado) {
      router.replace('/login');
      return;
    }

    setIsLoading(false);
  }, [isAuthenticated, router]);

  if (isLoading) {
    return (
      <main className="p-4 text-center" aria-live="polite">
        Carregando...
      </main>
    );
  }

  return children;
}
