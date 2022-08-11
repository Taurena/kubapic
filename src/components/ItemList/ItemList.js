import React from 'react'
import Item from '../Item/Item'
const ItemList = ({listProduct}) => {
  
  return (
    
    <div className="itemList">
        {listProduct.map(product => <Item key={product.id} product={product}/>)}
    </div> 
  )
}

export default ItemList