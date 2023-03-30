import React from 'react'

function Item(props) {

    function platform(plataforma) {
        return <img className="w-9" src={"img/platforms/"+ props.plataforma + ".svg"} />
    }

    return (
        <li className='mx-auto'>
            <div>
                <img className='mx-auto shadow-md' src={props.image} />
            </div>
            <div className='text-center'>
                {props.name}
            </div>
            <div className='mx-auto grid grid-cols-2 gap-2'>

                {platform(props.plataforma)}

            </div>
        </li>
    )
}

export default Item
