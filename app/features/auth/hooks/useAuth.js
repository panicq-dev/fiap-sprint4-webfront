'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  const isAuthenticated = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('usuarioLogado') === 'true';
  }, []);

  const login = useCallback((redirectTo = '/') => {
    localStorage.setItem('usuarioLogado', 'true');
    router.push(redirectTo);
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem('usuarioLogado');
    router.replace('/login');
  }, [router]);

  return { isAuthenticated, login, logout };
}
