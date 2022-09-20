import React from 'react'
import {Link} from 'react-router-dom'
const ItemCount = ({stock, count, setCount, onAdd, inCart }) => {

    const decrease = () => count > 1 ? setCount(count - 1) : 1
    const increase = () => count < stock ? setCount(count + 1) : count
    
    return (
        <section className='count'>
            <div>
                <div>
                    <h3>{count}</h3>
                    <button className='btonCount' onClick={decrease}> - </button>
                    <button className='btonCount' onClick={increase}> + </button>
                </div>
                <div>
                    <button className='btonCart' disabled={stock===0? true : false}  onClick={()=>onAdd(count)}>
                        {stock===0 ? 'Sin stock' : 'Agregar al carrito'}
                    </button>
                </div>
                
            </div>
            {!inCart &&
            <div>    
                <button className='btonCart'>
                    <Link className='link' to={`/cart`}> Terminar mi Compra </Link>
                </button>
            </div>
            }
        </section>
    )
}

export default ItemCount