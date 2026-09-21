'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Contato() {
    const [abaAtiva, setAbaAtiva] = useState('contato');
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();
    const [dados, setDados] = useState({
        nome: '',
        msg: ''
    });

    function handleSubmit() {
        const destinatario = 'seila@gmail.com'
        const title = encodeURIComponent(`Assunto para o Notez, por ${dados.nome}`)
        const msg = encodeURIComponent(dados.msg)
        window.location.href = `mailto:${destinatario}?subject=${title}&body=${msg}`;
        setDados({
            nome: '',
            msg: ''
        })
    }

    function handleChange(e) {
        const { name, value } = e.target.value;
        setDados((prevDados) => ({
            ...prev, [name]: value
        }))
    }

    useEffect(() => {
        const usuarioLogado = localStorage.getItem('usuarioLogado');

        if (!usuarioLogado) {
            router.push('/login');
        } else {
            setCarregando(false);
        }
    }, [router]);

    if (carregando) {
        return <p className="p-4 text-center">Carregando...</p>;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email' >Nome:</label>
                <input type='text' name='email' placeholder='Digite seu melhor e-mail' onChange={handleChange}></input>
                <label htmlFor='email'>Mensagem: </label>
                <input type='text' name='email' placeholder='Digite sua mensagem para nós'></input>
                <button name='btn-submit' className='bg-blue-500 p-2 rounded-md'>Enviar</button>
            </form>
        </>
    );
}