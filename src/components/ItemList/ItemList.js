import React from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
const ItemList = ({listProduct, loading}) => { 
  return (
    
    <section className="itemList"> 
     { loading? <Loading/> 
        : listProduct.map(product => <Item key={product.id} product={product}/>)
    }
    </section> 
  )
}

export default ItemList