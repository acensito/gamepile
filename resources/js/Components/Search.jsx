import React from 'react'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import { useForm } from '@inertiajs/react'

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
                className='col-span-1'
                disabled={processing}
            >Buscar</PrimaryButton>
        </form>
    )
}

export default Search
