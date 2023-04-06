import React from 'react'
import { CalendarDaysIcon, QrCodeIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import moment from 'moment';

function Item(props) {

    //devuelve enlace con icono de la plataforma
    // function platform(plataforma) {
    //     return <img className="rounded-md" src={"assets/platforms/"+ props.plataforma + ".png"} />
    // }

    return (
        <li className='mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='mx-auto'>
                <img className='mx-auto shadow-md' src={props.image} />
            </div>
            <div>
                <div className='text-left text-lg font-semibold'>
                    {props.name}
                </div>
                <div className='text-slate-600 grid grid-cols-2'>
                    <QrCodeIcon className='h-4'/>
                    <div className='text-xs'>{props.ean}</div>
                </div>
                <div className='text-left grid grid-cols-2'>
                    <div>
                        <img className="rounded-md" src={"assets/platforms/"+ props.plataforma + ".png"} />
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                        <GlobeAltIcon className='h-5'/>
                        <div className='text-xs'>🌍 {props.formato}</div>
                    </div>
                </div>
                <div className='text-slate-600 grid grid-cols-2'>
                    <CalendarDaysIcon className="h-6 w-6" />
                    <div>{moment.utc(props.date).format('DD-MM-YYYY')}</div>
                </div>
            </div>
        </li>
    )
}

export default Item
