import React from 'react'
import Item from './Item'

function List(props) {
    // console.log(props.items)

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2'>
            {
            props.items.map(item =>
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.nombre}
                    ean={item.ean}
                    plataforma={item.plataforma}
                    formato={item.formato}
                    image={item.image}
                    date={item.created_at}
                />
            )}
        </ul>
    )
}

export default List
