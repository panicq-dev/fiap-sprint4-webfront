'use client';

export default function Nav({ abaAtiva, setAbaAtiva }) {
    const itens = [
        { key: 'biblioteca', label: 'Biblioteca' },
        { key: 'contato', label: 'Contato' },
    ];

    return (
        <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">NoteZ</h1>
                </div>

                <nav aria-label="Menu principal">
                    <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                        {itens.map((item) => (
                            <li key={item.key}>
                                <button
                                    type="button"
                                    onClick={() => setAbaAtiva(item.key)}
                                    className={[
                                        'rounded-lg px-3 py-2 transition-colors',
                                        abaAtiva === item.key
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    ].join(' ')}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}