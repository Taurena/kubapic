import React from 'react'
import {customFetch} from '../../assets/customFetch'
import {products} from '../../assets/products'
import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
  
  const [listProduct, setlistProduct] =useState([])
  
  useEffect(()=>{
    customFetch(products)
    .then(data => setlistProduct(data))
  },[])

  return (
    <>
      <h1 className='text-center'>{greeting} </h1>
      <ItemList listProduct={listProduct}/>
    </>

  )
}

export default ItemListContainer