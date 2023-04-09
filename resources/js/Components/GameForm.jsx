import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from './TextInput';
import PrimaryButton from './PrimaryButton';
import InputLabel from './InputLabel';
import InputError from './InputError';

function GameForm({ isEdit, props }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        ean: '',
        platform: '',
        format: ''
    });

    useEffect(() => {
        if (props) {
            setFormData(props);
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('game.store'));
        setData({ name: '', ean: '', platform: '', format: '' });
    };

    // const [formData, setFormData] = useForm(props || {
    //     name: '',
    //     ean: '',
    //     platform: '',
    //     format: ''
    // });

    // useEffect(() => {
    //     if (props) {
    //         setFormData(props);
    //     }
    // });

    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (isEdit) {
    //         put(route('game.'), { onSuccess: () => reset() })
    //     } else {
    //         post(route('game.store'), { onSuccess: () => reset() })
    //     }
    //     setFormData({ name: '', ean: '', platform: '', format: '' });
    // };

    return (

        <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="name" value="Nombre del titulo" />

                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="ean" value="Codigo EAN" />

                <TextInput
                    id="ean"
                    type="text"
                    name="ean"
                    value={data.ean}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('ean', e.target.value)}
                />

                <InputError message={errors.ean} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="platform" value="Plataforma" />

                <TextInput
                    id="platform"
                    type="text"
                    name="platform"
                    value={data.platform}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('platform', e.target.value)}
                />

                <InputError message={errors.platform} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="format" value="Formato" />

                <TextInput
                    id="format"
                    type="text"
                    name="format"
                    value={data.format}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('format', e.target.value)}
                />

                <InputError message={errors.format} className="mt-2" />
            </div>

            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ml-4" disabled={processing}>
                    Guardar
                </PrimaryButton>
            </div>
        </form>


        // <form>
        //     <TextInput
        //         type='text'
        //         name="name"
        //         placeholder="Titulo del juego"
        //         value={formData.name}
        //         onChange={handleChange}
        //     />
        //     <TextInput
        //         type="text"
        //         name="ean"
        //         placeholder="Codigo EAN"
        //         value={formData.ean}
        //         onChange={handleChange}
        //     />
        //     <TextInput
        //         type="text"
        //         name="platform"
        //         placeholder="Plataforma"
        //         value={formData.platform}
        //         onChange={handleChange}
        //     />
        //     <TextInput
        //         type="text"
        //         name="format"
        //         placeholder="Formato"
        //         value={formData.format}
        //         onChange={handleChange}
        //     />
        //     <PrimaryButton onClick={handleSubmit}>Guardar</PrimaryButton>
        // </form>
    );
}

export default GameForm;
