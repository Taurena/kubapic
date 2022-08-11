import React from 'react';
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';

const ItemDetail = ({detail, loading}) => {
    
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
              <p className="fw-bold fs-3">{"$" + detail.price}</p>
              <p> Ver formas de pago</p>
              <div>
                <ItemCount stock={detail.stock} detail={detail} initial={1}/>
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