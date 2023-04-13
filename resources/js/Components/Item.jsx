import React from 'react'
import { CalendarDaysIcon, QrCodeIcon } from '@heroicons/react/24/solid'
import moment from 'moment';

function Item(data) {

    return (
        <li   className='my-1 inline-flex shadow-lg rounded-md'>

            <div className='w-32 p-1'>
                <img className='shadow-md' src={data.image} />
            </div>

            <div className='w-full text-left p-2'>
                <p className='text-left text-xl font-semibold'>
                    {data.name}
                </p>

                <div className='text-slate-600 grid grid-cols-2'>
                    {/* <QrCodeIcon className='h-4'/> */}
                    <p className='text-xs'>EAN: {data.ean}</p>
                </div>

                <div>
                    <div>
                        <img className="rounded-md" src={"assets/platforms/"+ data.platform + ".png"} />
                    </div>
                    <div>
                        <div className='text-xs'>🌍 {data.format}</div>
                    </div>
                </div>

                    {/* <CalendarDaysIcon className="h-6 w-6" /> */}
                <p className='w-full text-slate-600 grid grid-cols-2'>📅 {moment.utc(data.date).format('DD-MM-YYYY')}</p>
                <p><img className="w-6" src={data.age_rate} /></p>
            </div>
        </li>
    )
}

export default Item
