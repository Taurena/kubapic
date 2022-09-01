import { createContext, useState } from 'react'

export const CartContext = createContext()

const {Provider} = CartContext

const MyProvider = ({children}) => {

    const [cart, setCart]= useState([])
    
    const isInCart=(id) => cart.some(prod=>prod.id===id)
    
    const addItem=(detail, count)=>{
        const select = {...detail, count}
        if (isInCart(select.id)){
            const findItem = cart.find(x=>x.id==select.id)
            const productId = cart.indexOf(findItem)
            const newCart = [...cart]
            newCart[productId].count += count
            setCart(newCart)
        }else{
            const array= [...cart, select]
            setCart(array)
        }
    }
    
    const removeItem=(id)=>{
        return setCart(cart.filter(prod=>prod.id !==id))
    }

    const clear=()=>{
        return setCart ([])
    }

    const getItemQty=()=>{
        return cart.reduce((ac, x) => ac += x.count, 0)
    }
    
    const getItemPrice=()=>{
    return cart.reduce((acc,prod)=>acc+=prod.count*prod.price,0)
    }

    return <Provider value={{cart, addItem, isInCart, clear, removeItem, getItemQty, getItemPrice}}>{children}</Provider>

}

export default MyProvider