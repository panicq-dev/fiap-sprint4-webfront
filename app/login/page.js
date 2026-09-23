'use client';

import { useState } from 'react';

import { useAuth } from '../features/auth/hooks/useAuth';
import PublicRoute from '../components/auth/PublicRoute';

const EMAIL_PERMITIDO = 'email-exemplo@aura.com';
const SENHA_PERMITIDA = '42426767';

export default function LoginPage() {
    const { login } = useAuth();
    const [entrando, setEntrando] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        if (entrando) return;

        setMensagemErro('');

        const emailInformado = event.currentTarget.email.value;
        const senhaInformada = event.currentTarget.senha.value;

        if (emailInformado !== EMAIL_PERMITIDO || senhaInformada !== SENHA_PERMITIDA) {
            setMensagemErro('E-mail ou senha inválidos.');
            return;
        }

        setEntrando(true);

        try {
            login('/');
        } catch {
            setEntrando(false);
            setMensagemErro('Não foi possível entrar agora. Tente novamente.');
        }
    }

    return (
        <PublicRoute>
            <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
                    <h1 className="text-center text-2xl font-bold text-gray-900">NoteZ</h1>
                    <p className="mt-3 text-center text-sm text-gray-600">
                        Faça login para entrar no sistema.
                    </p>

                    <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                E-mail:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue="email-exemplo@aura.com"
                                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="senha" className="mb-1 block text-sm font-medium text-gray-700">
                                Senha:
                            </label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                defaultValue="42426767"
                                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-500"
                                required
                            />
                        </div>

                        {mensagemErro && (
                            <p role="alert" className="text-sm text-red-600">
                                {mensagemErro}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={entrando}
                            aria-busy={entrando}
                            className="mt-2 w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
                        >
                            {entrando ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                </div>
            </main>
        </PublicRoute>
    );
}