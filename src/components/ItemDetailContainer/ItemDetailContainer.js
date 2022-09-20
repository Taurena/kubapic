import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {db} from "../../firebase"
import {collection, getDoc, doc} from 'firebase/firestore'
import Swal from 'sweetalert2';


function ItemDetailContainer () {

    const [detail, setDetail] =useState([]);
    const [loading, setLoading] =useState(true)
    const {id} = useParams();
    useEffect(() => {
        const productosCollection = collection(db, 'products') 
        const item = doc(productosCollection, id) 
        const list = getDoc(item) 

        setTimeout(() => {
        list
        .then((res)=>{
          const det={...res.data(), id: res.id}
            setDetail(det)
            setLoading(false)
        })
        .catch((err) => {
          Swal.fire('Ocurrio un error')
        })
      }, 1000);
    },[id]);

  return (
    <main>
      <ItemDetail 
        detail={detail} 
        loading={loading}/>
    </main>
  );
};
export default ItemDetailContainer;