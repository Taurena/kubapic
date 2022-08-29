import React from 'react';
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { collection, query, where, getDocs} from "firebase/firestore"
import { db } from "../../firebase"

const ItemListContainer = ({greeting}) => {
  const [listProduct, setlistProduct] =useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams ()

  useEffect(()=>{

    const productsCollection=collection(db, "products")
 if(!categoryId) {  
 const consulta =getDocs(productsCollection)

    consulta
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
      console.log(err)
  })
  }else{
    const filter = query(productsCollection,
      where("categoryId","==",categoryId))
  const consulta = getDocs(filter)
  consulta
            .then(snapshot=>{
                const products = snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setlistProduct(products)
                setLoading(false)
            })
  }
   },[categoryId]);

  return (
    <>
      <h1 className='text-center'>{greeting} </h1>
      <ItemList listProduct={listProduct} loading={loading}/>
    </>
  )
}

export default ItemListContainer