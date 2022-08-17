import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return (
         <button>
            <Link to={`/cart`}> <GiShoppingCart /> </Link>            
        </button>
    )
}

export default CartWidget