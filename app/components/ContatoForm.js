'use client';

import { useState } from 'react';

export default function ContatoForm() {
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        msg: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        const destinatario = 'seila@gmail.com';
        const assunto = encodeURIComponent(`Mensagem de ${dados.nome}`);
        const corpo = encodeURIComponent(
            `Nome: ${dados.nome}\nE-mail: ${dados.email}\n\nMensagem:\n${dados.msg}`
        );

        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
        setDados({ nome: '', email: '', msg: '' });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setDados((prevDados) => ({
            ...prevDados,
            [name]: value
        }));
    }

    return (
        <div className="mx-auto max-w-xl rounded-xl bg-white p-5 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900">Contato</h1>
            <p className="mt-2 text-sm text-gray-600">
                Se quiser conversar, mande uma mensagem por e-mail.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="nome" className="mb-1 block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={dados.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={dados.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="msg" className="mb-1 block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                        id="msg"
                        name="msg"
                        value={dados.msg}
                        onChange={handleChange}
                        placeholder="Escreva sua mensagem"
                        className="h-32 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400"
                        required
                    />
                </div>

                <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700">
                    Enviar mensagem
                </button>
            </form>
        </div>
    );
}
