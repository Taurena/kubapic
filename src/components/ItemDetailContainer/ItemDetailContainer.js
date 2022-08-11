import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from "react";
import {products} from '../../assets/products'

function ItemDetailContainer () {

    const [detail, setDetail] =useState();
    const [loading, setLoading] =useState(true)
    const num = Math.floor(Math.random() * (13 - 1) + 1)
    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
      getItem
        .then((result) => {  
          setDetail(result.find(item=> item.id===num));
          setLoading (false)
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);

  return (
    <div>
      <ItemDetail detail={detail} loading={loading}/>
    </div>
  );
};
export default ItemDetailContainer;