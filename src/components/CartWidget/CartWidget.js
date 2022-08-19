import React, { useContext } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const {getItemQty} = useContext(CartContext)
    
    return (
         <button>
            <Link to={`/cart`}> {getItemQty()} <GiShoppingCart /> </Link>            
        </button>
    )
}

export default CartWidget