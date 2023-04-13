import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from './TextInput';
import PrimaryButton from './PrimaryButton';
import InputLabel from './InputLabel';
import InputError from './InputError';
import Toggle from './Toogle';
import SelectField from './SelectField';

function GameForm({ isEdit, props }) {

    const options = [
        { value: 'PS4', label: 'Playstation 4' },
        { value: 'NSW', label: 'Nintendo Switch' },
        { value: '360', label: 'Xbox 360' },
      ];

    const region = [
        { value: 'PAL-ES', label: 'PAL-ES' },
        { value: 'PAL-EU', label: 'PAL-EU' },
        { value: 'PAL-FR', label: 'PAL-FR' },
        { value: 'PAL-UK', label: 'PAL-UK' },
        { value: 'PAL-DE', label: 'PAL-DE' },
        { value: 'NTSC-JAP', label: 'NTSC-JAP' },
        { value: 'NTSC-ASIA', label: 'NTSC-ASIA' },
      ];

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        ean: '',
        platform: '',
        format: '',
        image_url: ''
    });

    useEffect(() => {
        if (props) {
            setFormData(props);
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('game.store'));
        setData({ name: '', ean: '', platform: '', format: '', image_url: '' });
    };

    return (

        <form autoComplete="off" onSubmit={submit}>
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
                <SelectField
                    id="platform"
                    name="platform"
                    className="mt-1 block w-full"
                    defaultOptionTitle='Seleccione plataforma'
                    options={options}
                    value={data.platform}
                    onChange={(e) => setData('platform', e.target.value)}
                />

                <InputError message={errors.platform} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="format" value="Region" />
                <SelectField
                    id="format"
                    name="format"
                    className="mt-1 block w-full"
                    options={region}
                    value={data.format}
                    onChange={(e) => setData('format', e.target.value)}
                />

                <InputError message={errors.format} className="mt-2" />
            </div>

            {/* <div className="mt-4">
                <InputLabel htmlFor="format" value="Region" />

                <TextInput
                    id="format"
                    type="text"
                    name="format"
                    value={data.format}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('format', e.target.value)}
                />

                <InputError message={errors.format} className="mt-2" />
            </div> */}

            <div className="mt-4">
                <InputLabel htmlFor="image" value="Imagen" />

                <TextInput
                    id="image_url"
                    type="text"
                    name="image_url"
                    value={data.image_url}
                    placeholder='Introduzca una url de imagen valida'
                    className="mt-1 block w-full"
                    onChange={(e) => setData('image_url', e.target.value)}
                />

                <InputError message={errors.image} className="mt-2" />
            </div>

            {/* <div className="mt-4">
                <Toggle
                    name="archivo"
                >
                    Activar subida por archivo
                </Toggle>
            </div> */}

            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ml-4" disabled={processing}>
                    Guardar
                </PrimaryButton>
            </div>
        </form>

    );
}

export default GameForm;
