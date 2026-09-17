import { useState, useEffect } from 'react';

export function useProcurarLivro(query) { {/* Aqui precisa de um parametro (query)*/}
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        async function fetchBooks() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=8`
                );
                if (!response.ok) throw new Error('Erro ao carregar os livros.'); { /* Aqui se o fetch der pau, ou seja, se não fizer   requisição, retorna erro e a msg em questão*/ }

                const data = await response.json();

                const formattedBooks = data.docs.map((book) => ({
                    id: book.key,
                    title: book.title,
                    author: book.author_name ? book.author_name[0] : 'Autor não informado',
                    firstPublishYear: book.first_publish_year || 'N/A',
                    cover: book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                        : 'https://via.placeholder.com/150x200?text=Sem+Capa',
                }));

                setBooks(formattedBooks);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [query]);

    return { books, loading, error };
}