'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LivroDetalhesPage() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function carregarLivro() {
      setLoading(true);

      const response = await fetch(`https://openlibrary.org/works/${id}.json`);

      if (!response.ok) {
        setLivro(null);
        setLoading(false);
        return;
      }

      const obra = await response.json();
      const authorKey = obra.authors?.[0]?.author?.key;
      let authorName = 'Autor não informado';

      if (authorKey) {
        try {
          const authorResponse = await fetch(`https://openlibrary.org${authorKey}.json`);
          if (authorResponse.ok) {
            const author = await authorResponse.json();
            authorName = author.name || authorName;
          }
        } catch {
          authorName = 'Autor não informado';
        }
      }

      setLivro({
        title: obra.title,
        author: authorName,
        year: obra.first_publish_date || 'Ano não informado',
        cover: obra.covers?.[0]
          ? `https://covers.openlibrary.org/b/id/${obra.covers[0]}-L.jpg`
          : 'https://via.placeholder.com/300x420?text=Sem+Capa',
        description: typeof obra.description === 'string'
          ? obra.description
          : obra.description?.value || 'Descrição não disponível no momento.'
      });
      setLoading(false);
    }

    carregarLivro().catch(() => {
      setLivro(null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p className="p-6 text-sm text-gray-600">Carregando livro...</p>;
  }

  if (!livro) {
    return (
      <main className="min-h-screen bg-stone-100 p-6">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Livro não encontrado</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-5 sm:p-6">
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <img src={livro.cover} alt={livro.title} className="h-auto w-full rounded-lg object-cover bg-gray-100" />

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-gray-500">Detalhes do livro</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{livro.title}</h1>
            <p className="mt-3 text-base text-gray-600">Autor: {livro.author}</p>
            <p className="mt-1 text-base text-gray-600">Ano: {livro.year}</p>
            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <h2 className="text-lg font-semibold text-gray-900">Descrição</h2>
              <p className="mt-2 text-sm leading-6 text-gray-700">{livro.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
