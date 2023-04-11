import React from 'react'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import { useForm } from '@inertiajs/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Search(props) {

    const { setData, get, processing } = useForm({
        search: ''
    });

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        get(route('dashboard'));
    };

    return (
        <form onSubmit={submit} className='grid grid-cols-6 gap-1'>
            <TextInput
                id="search"
                name="search"
                placeholder="Buscar juego"
                onChange={(e) => setData('search', e.target.value)}
                className="col-span-5"
            />
            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                <div className='text-center'>
                    <MagnifyingGlassIcon className='h-6'/>
                </div>

            </PrimaryButton>
        </form>
    )
}

export default Search
