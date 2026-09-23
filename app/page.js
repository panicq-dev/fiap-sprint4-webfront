'use client';

import { useState } from 'react';
import Nav from './components/layout/Nav';
import Biblioteca from './features/books/components/Biblioteca';
import ContatoForm from './components/ContatoForm';
import PrivateRoute from './components/auth/PrivateRoute';

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState('biblioteca');

  return (
    <PrivateRoute>
      <main className="min-h-screen bg-stone-100 text-gray-800">
        <Nav abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          {abaAtiva === 'biblioteca' && <Biblioteca />}
          {abaAtiva === 'contato' && <ContatoForm />}
        </div>
      </main>
    </PrivateRoute>
  );
}