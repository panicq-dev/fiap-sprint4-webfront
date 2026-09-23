'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useProcurarLivro } from '../hooks/useProcurarLivro';

export default function Biblioteca() {
    const [query, setQuery] = useState('programacao');
    const [inputVal, setInputVal] = useState('');
    const { books, loading, error } = useProcurarLivro(query);

    const detailsPath = (bookId) => `/features/books/${bookId.split('/').pop()}`;

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputVal.trim()) {
            setQuery(inputVal.trim());
        }
    };

    return (
        <section id="biblioteca" className="rounded-xl bg-white p-4 sm:p-6">
            <div className="mb-5">
                <h2 className="text-2xl font-bold text-gray-900">Biblioteca</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Livros e materiais para estudo.
                </p>
            </div>

            <form onSubmit={handleSearch} className="mb-5 flex flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    placeholder="Buscar por título ou tema"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400"
                />
                <button
                    type="submit"
                    className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
                >
                    Buscar
                </button>
            </form>

            {loading && <p className="text-sm text-gray-600">Carregando acervo...</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {!loading && !error && books.length === 0 && (
                <p className="text-sm text-gray-600">
                    Nenhum livro encontrado para essa busca.
                </p>
            )}

            {!loading && !error && books.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {books.map((book) => (
                        <article key={book.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                            <Link href={detailsPath(book.id)} className="block">
                                <img src={book.cover} alt={book.title} className="h-52 w-full object-cover bg-gray-100" />
                            </Link>

                            <div className="space-y-3 p-4">
                                <div>
                                    <Link href={detailsPath(book.id)} className="block text-base font-semibold text-gray-900 hover:text-gray-700">
                                        {book.title}
                                    </Link>
                                    <p className="mt-1 text-sm text-gray-600">{book.author}</p>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs text-gray-500">{book.firstPublishYear}</span>
                                    <Link
                                        href={detailsPath(book.id)}
                                        className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-800 hover:bg-gray-100"
                                    >
                                        Ver mais
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}