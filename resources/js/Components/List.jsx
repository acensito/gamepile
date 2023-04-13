import React from 'react'
import Item from './Item'

function List(props) {

    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-2'>
            {props.items.length === 0 ? (
                <li className="mx-auto m-4 text-gray-900">No existen resultados con dicha búsqueda</li>
            ):(
                props.items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        ean={item.ean}
                        platform={item.platform}
                        format={item.format}
                        image={item.image}
                        date={item.created_at}
                        age_rate={item.age_rate}
                    />
                )
            )}
        </ul>
    )
}

export default List
