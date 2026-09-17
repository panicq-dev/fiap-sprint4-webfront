'use client';

import { useState } from 'react';
import { useProcurarLivro } from '../hooks/useProcurarLivro';

export default function Biblioteca() {
    const [query, setQuery] = useState('programacao');
    const [inputVal, setInputVal] = useState('');
    const { books, loading, error } = useProcurarLivro(query);

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputVal.trim()) {
            setQuery(inputVal.trim());
        }
    };

    return (
        <section id="biblioteca">
            {/* Cabeçalho */}
            <div>
                <h2>Biblioteca de Estudos</h2>
                <p>Pesquise livros e materiais de apoio para suas disciplinas.</p>
            </div>

            {/* Formulário de Busca */}
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Buscar por tema ou título..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            {/* Exibição dos estados */}
            {loading && <p>Carregando acervo...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className="flex flex-wrap gap-4">
                    {books.map((book) => (
                        <div key={book.id}>
                            <img src={book.cover} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <span>Publicado em: {book.firstPublishYear}</span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}