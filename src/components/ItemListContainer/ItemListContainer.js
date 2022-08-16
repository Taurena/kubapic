import React from 'react';
import {customFetch} from '../../assets/customFetch';
import {products} from '../../assets/products';
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [listProduct, setlistProduct] =useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams ()

  useEffect(()=>{
    customFetch(products)
      .then((data) =>{
        if (categoryId) {
          const filt = data.filter((products) => products.categoryId == categoryId);
            return setlistProduct(filt); 
         } else {
          setlistProduct(data)
          setLoading(false);
          }
        })
    },[categoryId]);

  return (
    <>
      <h1 className='text-center'>{greeting} </h1>
      <ItemList listProduct={listProduct} loading={loading}/>
    </>
  )
}

export default ItemListContainer