import React from 'react'
import { CalendarDaysIcon, QrCodeIcon } from '@heroicons/react/24/solid'
import moment from 'moment';

function Item(data) {

    return (
        <li className='my-1 inline-flex shadow-lg rounded-md'>

            <div className='w-32 p-1'>
                <img className='shadow-md' src={data.image} />
            </div>

            <div className='w-full'>
                <div className='text-left text-xl font-semibold'>
                    {data.name}
                </div>
                <div className='text-slate-600 grid grid-cols-2'>
                    <QrCodeIcon className='h-4'/>
                    <div className='text-xs'>{data.ean}</div>
                </div>

                <div className='text-left grid grid-cols-2'>
                    <div>
                        <img className="rounded-md" src={"assets/platforms/"+ data.platform + ".png"} />
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                        <div className='text-xs'>🌍 {data.format}</div>
                    </div>
                </div>

                <div className='text-slate-600 grid grid-cols-2'>
                    {/* <CalendarDaysIcon className="h-6 w-6" /> */}
                    <div>📅 {moment.utc(data.date).format('DD-MM-YYYY')}</div>
                </div>
            </div>
        </li>
    )
}

export default Item
