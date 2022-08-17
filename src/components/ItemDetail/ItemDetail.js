import React from 'react';
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { useState } from 'react';

const ItemDetail = ({detail, loading}) => {

  const [count, setCount] = useState(1);
  const [inCart, setIncart] = useState(true);

  const onAdd = (count) => {
    setIncart (false)
    alert("Se ha/n agregado al carrito " + count + " producto/s de " + detail.name)
    const select = {... detail, count}
    console.log(select)
    setCount(0)
    }
    
  return (
    <div>
      {loading ? <Loading/>
    : <div  key={detail.id} className="justify-content-md-center detail" >
        <div className='product'>
            <div>
              <img className='imgDetail' src={detail.img} alt={detail.name} />
            </div>
            <div className='productDetail'>
              <h2>{detail.name}</h2>
              <p>color del marco</p>
              <select className='form-select' aria-label="Default select example">
                <option selected>seleccion de color</option>
                <option value="1">Blanco</option>
                <option value="2">Negro</option>
                <option value="3">Natural</option>
              </select>
              <p className="fw-bold fs-3 p-2">{"$" + detail.price}</p>
              <p> Ver formas de pago</p>
              <div>
                <ItemCount stock={detail.stock} count={count} setCount={setCount} detail={detail} onAdd={onAdd} inCart={inCart}/>
              </div>
            </div>
        </div>
        <div className="text-center">
          <p>{detail.data}</p>
        </div>
      </div>
      }  
    </div>
    
  )
}

export default ItemDetail