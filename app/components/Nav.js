'use client';

export default function Nav({ abaAtiva, setAbaAtiva }) {
    return (
        <header className="flex justify-between items-center p-4 border-b">
            <div>
                <h1>NoteZ</h1>
            </div>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('solucao')}
                            className={abaAtiva === 'solucao' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('publico-alvo')}
                            className={abaAtiva === 'publico-alvo' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('biblioteca')}
                            className={abaAtiva === 'biblioteca' ? 'font-bold' : ''}
                        >
                            Biblioteca
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('galeria')}
                            className={abaAtiva === 'galeria' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('equipe')}
                            className={abaAtiva === 'equipe' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('contato')}
                            className={abaAtiva === 'contato' ? 'font-bold' : ''}
                        >
                            Contato
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}