import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2'

const ItemDetail = ({detail, loading}) => {

  const {img, id, name, price, stock, data} = detail
  const { isInCart, addItem, getItemQty,} =useContext(CartContext)
  const [count, setCount] = useState(1);
  const [inCart, setIncart] = useState(true);
 
  const onAdd = () => {
  setIncart (false)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se ha/n agregado al carrito ' + count + ' producto/s de ' + detail.name,
    showConfirmButton: false,
    timer: 2000
  })
  isInCart(detail, count)
  addItem(detail, count)
  getItemQty(count)  
  setCount(1)
  }

  return (
    <div className="min-vh-100">
      {loading ? <Loading/>
    : <div  key={id} className="detail" >
            <img className='imgDetail' src={img} alt={name} />
        <div className='product'>
          <h2>{name}</h2>
          <h3>{"$" + price}</h3>
            <p> Ver formas de pago</p>
          <div>
            <ItemCount 
              stock={stock} 
              onAdd={onAdd} 
              count={count} 
              setCount={setCount} 
              inCart={inCart}/>
          </div>
          <hr/>
            <p>{data}</p>
        </div> 
      </div>
      }
    </div>
  )
}

export default ItemDetail