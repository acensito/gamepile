import React from 'react'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import { useForm } from '@inertiajs/react'

function Search(props) {

    const { data, setData, get, processing } = useForm({
        search: ''
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);

        get(route('dashboard'));
    };

    return (
        <form onSubmit={submit}>
            <TextInput
                id="search"
                name="search"
                placeholder="Buscar juego"
                onChange={(e) => setData('search', e.target.value)}
            />
            <PrimaryButton type="submit" disabled={processing}>Buscar</PrimaryButton>
        </form>
    )
}

export default Search
