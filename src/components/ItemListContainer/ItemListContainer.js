import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { db } from '../../firebase';
import Template from '../Template/Template';
import Swal from 'sweetalert2'

const ItemListContainer = ({greeting}) => {
  const [listProduct, setlistProduct] =useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams ()

  useEffect(()=>{
    const productsCollection=collection(db, 'products')
    
    if(!categoryId) {  
    const list =getDocs(productsCollection)
    list
    .then(data=>{
      const products=data.docs.map(doc=>{
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setlistProduct (products)
      setLoading(false);
    })
    .catch(err=>{
      Swal.fire('Ocurrio un error')
  })
  }else{
    const filter = query(productsCollection,
      where("categoryId","==",categoryId))
  const list = getDocs(filter)
  list
    .then(data=>{
      const products = data.docs.map(doc=>{
        return {
          ...doc.data(),
          id: doc.id
          }
        })
        setlistProduct(products)
        setLoading(false)
        })
    .catch(err=>{
      Swal.fire('Ocurrio un error')
    })
  }},[categoryId]);

  return (
    <Template title= 'Catalogo' subtitle={categoryId}>
      <ItemList 
        listProduct={listProduct} 
        loading={loading}/>
    </Template>
  )
}

export default ItemListContainer