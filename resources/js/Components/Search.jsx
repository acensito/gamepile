import React from 'react'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import DangerButton from './DangerButton'
import SucessButton from './SuccessButton'
import EditButton from './EditButton'

function Search(props) {
  return (
    <div className='grid grid-cols-6 gap-2'>
        <TextInput placeholder="Buscar juego" className="col-span-5"/>
        <PrimaryButton className='col-span-1'>Buscar</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <DangerButton>Danger</DangerButton>
        <SucessButton>Sucess</SucessButton>
        <EditButton>Edit</EditButton>
    </div>
  )
}

export default Search
