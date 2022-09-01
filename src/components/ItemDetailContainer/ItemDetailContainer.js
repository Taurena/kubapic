import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {db} from "../../firebase"
import {collection, getDoc, doc} from 'firebase/firestore'

function ItemDetailContainer () {

    const [detail, setDetail] =useState([]);
    const [loading, setLoading] =useState(true)
    const {id} = useParams();
    useEffect(() => {
  
        const productosCollection = collection(db, "products") 
        const item = doc(productosCollection, id) 
        const consulta = getDoc(item) 
        setTimeout(() => {
        consulta
        .then((res)=>{
          const det={...res.data(), id: res.id}
            setDetail(det)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
      }, 1000);
    },[id]);

  return (
    <div>
      <ItemDetail detail={detail} loading={loading}/>
    </div>
  );
};
export default ItemDetailContainer;