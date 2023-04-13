import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import List from '@/Components/List';
import Search from '@/Components/Search';

export default function Dashboard({ auth, items }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <Search />
                </>
            }
        >
            <Head title="Listado" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-2 overflow-hidden shadow-sm sm:rounded-lg">
                        <List items={items} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
