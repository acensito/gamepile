import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

function Item(props) {

    //devuelve enlace con icono de la plataforma
    function platform(plataforma) {
        return <img className="rounded-md" src={"assets/platforms/"+ props.plataforma + ".png"} />
    }

    return (
        <li className='mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='mx-auto'>
                <img className='mx-auto shadow-md' src={props.image} />
            </div>
            <div>
                <div className='text-left text-lg font-semibold'>
                    {props.name}
                </div>
                <div className='text-left grid grid-cols-2'>
                    <div>
                        {platform(props.plataforma)}
                    </div>
                    <div>
                        {props.formato}
                    </div>
                </div>
                <div>
                    <CalendarDaysIcon className="h-6 w-6 text-slate-600" /> {props.date}
                </div>
            </div>
        </li>
    )
}

export default Item
