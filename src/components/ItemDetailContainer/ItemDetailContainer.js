import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from "react";
import {products} from '../../assets/products';
import {useParams} from 'react-router-dom';


function ItemDetailContainer () {

    const [detail, setDetail] =useState([]);
    const [loading, setLoading] =useState(true)
    
    const {id} = useParams();
    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
      getItem
        .then((result) => {  
          setDetail(result.find(item=>item.id==id));
          setLoading (false)
        })
        .catch((err) => {
          console.log(err);
        });
    },[id]);
  return (
    <div>
      <ItemDetail detail={detail} loading={loading}/>
    </div>
  );
};
export default ItemDetailContainer;