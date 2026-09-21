'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    function handleLoginSimulado(e) {
        e.preventDefault();

        // Define a flag de login simulado no localStorage
        localStorage.setItem('usuarioLogado', 'true');

        // Redireciona diretamente para a página inicial/dashboard
        router.push('/');
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
                    Acesso ao NoteZ
                </h1>

                <p className="mb-6 text-center text-sm text-gray-600">
                    Essa tela de login é apenas de enfeite, sem autenticação de verdade...
                </p>

                <form onSubmit={handleLoginSimulado} className="flex flex-col gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            E-mail:
                        </label>
                        <input
                            type="email"
                            defaultValue="email-exemplo@aura.com"
                            className="w-full rounded border border-gray-300 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Senha:
                        </label>
                        <input
                            type="password"
                            defaultValue="42426767"
                            className="w-full rounded border border-gray-300 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Entre agora mesmo...
                    </button>
                </form>
            </div>
        </main>
    );
}