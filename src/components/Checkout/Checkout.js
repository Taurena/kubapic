import React, { useState, useContext} from 'react'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import {db} from '../../firebase'
import { CartContext} from '../context/CartContext'
import {Button, Form,} from 'react-bootstrap';
import Swal from 'sweetalert2'
import Template from '../Template/Template';

const Checkout = () => {

    const {cart, getItemPrice}=useContext(CartContext)
    const [submit, setSubmit] = useState(false)
    const [id, setId]= useState()
    const [costumer, setCostumer] = useState({
        name:'',
        lastname:'',
        email:'',
        address:'',
    })

    const handlerChangeInput=(e)=>{
        setCostumer({
            ...costumer,
            [e.target.name]:e.target.value,
        })
    }
    const handlerSubmit=(e)=>{
        e.preventDefault()
        const order={
            items: cart,
            buyer:{...costumer},
            price: getItemPrice(),
            date: serverTimestamp()
        }

        setSubmit(true)

        const ordersCollection = collection(db, "orders")
        const nOrder = addDoc (ordersCollection, order)
        nOrder
            .then((res)=>{
                setId(res.id)
                Swal.fire({
                    icon: 'info',
                    html: costumer.name + ', tu compra se ha realizado con exito. El ID de tu compra es #' + res.id,
                    showConfirmButton: false,
                    footer: '<a href="/"}> Volver al home </a>',
                    allowOutsideClick: false
                    })
            })
            
            .catch(err=>{
                Swal.fire('Ocurrio un error')
            })
    }
    
  return (
    <Template title='Finaliza tu compra'>
        <Form className="form" onSubmit={handlerSubmit}>
            <h2>Completar datos</h2>
            <Form.Group className='input'>
                <Form.Control 
                    type='text'
                    required
                    placeholder='Nombre' 
                    name='name' 
                    value={costumer.name} 
                    onChange={handlerChangeInput}/>
                <Form.Control 
                    type='text'
                    required
                    placeholder='Apellido' 
                    name='lastname' 
                    value={costumer.lastname} 
                    onChange={handlerChangeInput}/>
                <Form.Control 
                    type="email"
                    required
                    placeholder='Correo electronico' 
                    name='email' 
                    value={costumer.email} 
                    onChange={handlerChangeInput}/>
                <Form.Control 
                    type='text'
                    required
                    placeholder='Domicilio' 
                    name='address' 
                    value={costumer.address} 
                    onChange={handlerChangeInput}/>
            </Form.Group>
            <Button type='submit' variant="outline-secondary">confirmar compra</Button>
        </Form>
    </Template>
  )
}

export default Checkout