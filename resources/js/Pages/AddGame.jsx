import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
//import Search from '@/Components/Search';
import GameForm from '@/Components/GameForm'

export default function AddGame({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2>Inserte un juego nuevo en la colección:</h2>
            }
        >
            <Head title="Agregar Juego" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-2 overflow-hidden shadow-sm sm:rounded-lg">
                        <GameForm isEdit={false}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
