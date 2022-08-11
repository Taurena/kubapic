import React, { useState } from 'react'

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial);

    const decrease = () => count > initial ? setCount(count - 1) : initial

    const increase = () => count < stock ? setCount(count + 1) : count

    const onAdd = (count) => {
        alert("Se ha/n agregado al carrito " + count + " producto/s")
        console.log(count)
        setCount(0)
    }

    return (
        <div className='count'>
            <div>
                <div >
                    <div>
                        <h3>{count}</h3>
                        <button className='btonCount' onClick={decrease}> - </button>
                        <button className='btonCount' onClick={increase}> + </button>
                    </div>
                    <div>
                        <button className='btonCart' onClick={() => onAdd(count)} >Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount