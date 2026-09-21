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
                            onClick={() => setAbaAtiva('home')}
                            className={abaAtiva === 'home' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('sec-2')}
                            className={abaAtiva === 'sec-2' ? 'font-bold' : ''}
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
                            onClick={() => setAbaAtiva('sec-4')}
                            className={abaAtiva === 'sec-4' ? 'font-bold' : ''}
                        >
                            X
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setAbaAtiva('sec-5')}
                            className={abaAtiva === 'sec-5' ? 'font-bold' : ''}
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