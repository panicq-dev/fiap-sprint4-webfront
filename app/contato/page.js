'use client';

import PrivateRoute from '../components/auth/PrivateRoute';
import ContatoForm from '../components/ContatoForm';

export default function Contato() {
    return (
        <PrivateRoute>
            <main className="min-h-screen bg-gray-100 p-4 sm:p-6">
                <ContatoForm />
            </main>
        </PrivateRoute>
    );
}