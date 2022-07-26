import React from 'react'
import  ItemCount  from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h1 className='text-center'>{greeting} </h1>
      <ItemCount initial={1} stock={6}/>
    </>
    
  )
}

export default ItemListContainer