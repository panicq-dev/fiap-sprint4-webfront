'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PublicRoute({ children }) {
  const router = useRouter();
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const estaLogado = localStorage.getItem('usuarioLogado') === 'true';
    setUsuarioLogado(estaLogado);

    if (estaLogado) {
      router.replace('/');
    }
  }, [router]);

  if (usuarioLogado === null) {
    return (
      <main className="p-4 text-center" aria-live="polite">
        Carregando...
      </main>
    );
  }

  return children;
}
