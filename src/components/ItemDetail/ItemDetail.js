import React, { useContext, useState } from 'react';
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({detail, loading}) => {

  const {img, id, name, price, stock, data} = detail
  const { isInCart, addItem, getItemQty,} =useContext(CartContext)
  const [count, setCount] = useState(1);
  const [inCart, setIncart] = useState(true);
 
  const onAdd = () => {
  setIncart (false)
  alert("Se ha/n agregado al carrito " + count + " producto/s de " + detail.name)
  isInCart(detail, count)
  addItem(detail, count)
  getItemQty(count)  
  setCount(1)
  }

  return (
    <div>
      {loading ? <Loading/>
    : <div  key={id} className="justify-content-md-center detail" >
        <div className='product'>
            <div>
              <img className='imgDetail' src={img} alt={name} />
            </div>
            <div className='productDetail'>
              <h2>{name}</h2>
              <p>color del marco</p>
              <select className='form-select' aria-label="Default select example">
                <option selected>seleccion de color</option>
                <option value="1">Blanco</option>
                <option value="2">Negro</option>
                <option value="3">Natural</option>
              </select>
              <p className="fw-bold fs-3 p-2">{"$" + price}</p>
              <p> Ver formas de pago</p>
              <div>
                <ItemCount stock={stock} onAdd={onAdd} count={count} setCount={setCount} inCart={inCart}/>
              </div>
            </div>
        </div>
        <div className="text-center">
          <p>{data}</p>
        </div>
      </div>
      }  
    </div>
  )
}

export default ItemDetail