'use client';

import { useState } from 'react';
import Nav from './components/Nav';
import Biblioteca from './components/Biblioteca';

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState('solucao');

  return (
    <main>
      
      <Nav abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      {abaAtiva === 'solucao' && (
        <section>
          <h2>A Solução</h2>
          <p>Conteúdo da solução...</p>
        </section>
      )}

      {abaAtiva === 'publico-alvo' && (
        <section>
          <h2>Público-Alvo</h2>
          <p>Conteúdo do público-alvo...</p>
        </section>
      )}

      {abaAtiva === 'biblioteca' && <Biblioteca />}

      {abaAtiva === 'galeria' && (
        <section>
          <h2>Galeria</h2>
          <p>Conteúdo da galeria...</p>
        </section>
      )}

      {abaAtiva === 'equipe' && (
        <section>
          <h2>Nossa Equipe</h2>
          <p>Conteúdo da equipe...</p>
        </section>
      )}

      {abaAtiva === 'contato' && (
        <section>
          <h2>Contato</h2>
          <p>Conteúdo de contato...</p>
        </section>
      )}
    </main>
  );
}