'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Nav from './components/Nav';
import Biblioteca from './components/Biblioteca';
import Contato from './contato/page';

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState('home');
  const [carregando, setCarregando] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (!usuarioLogado) {
      router.push('/login');
    } else {
      setCarregando(false);
    }
  }, [router]);

  if (carregando) {
    return <p className="p-4 text-center">Carregando...</p>;
  }

  return (
    <main>
      <Nav abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      {abaAtiva === 'home' && (
        <section>
          <h2>Home</h2>
          <p>Home...</p>
        </section>
      )}

      {abaAtiva === 'sec-2' && (
        <section>
          <h2>seção 2</h2>
          <p>section 2</p>
        </section>
      )}

      {abaAtiva === 'biblioteca' && <Biblioteca />}

      {abaAtiva === 'sec-4' && (
        <section>
          <h2>Sec4</h2>
          <p>Sec4...</p>
        </section>
      )}

      {abaAtiva === 'sec5' && (
        <section>
          <h2>Sec5</h2>
          <p>Sec5</p>
        </section>
      )}

      {abaAtiva === 'contato' && <Contato />}
    </main>
  );
}