import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import {db} from '../../firebase'
import { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import {Button, Card} from 'react-bootstrap';

const Checkout = () => {

    const {cart, getItemPrice, clear}=useContext(CartContext)
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
                console.log(res.id)
                setId(res.id)
            })
            .catch(err=>{
                console.log(err)
            })
        clear()    
    }

    const navigate = useNavigate();
    
  return (
    <div>
        { !submit ? 
        <div className='form'>
        <h2>Completar datos</h2>
        <form className="row align-items-start form-floating" onSubmit={handlerSubmit}>
            <input placeholder='Nombre' name='name' value={costumer.name} onChange={handlerChangeInput}></input>
            <input placeholder='Apellido' name='lastname' value={costumer.lastname} onChange={handlerChangeInput}></input>
            <input placeholder='Correo electronico' name='email' value={costumer.email} onChange={handlerChangeInput}></input>
            <input placeholder='Domicilio' name='address' value={costumer.address} onChange={handlerChangeInput}></input>
            <Button type='submit' variant="outline-secondary" >confirmar compra</Button>
        </form>
        </div> 
        :
        <Card className="text-center">
            <Card.Header>Checkout</Card.Header>
            <Card.Body>
                <Card.Title>{costumer.name} {costumer.lastname} tu compra ha sido realizada con exito!</Card.Title>
                <Card.Text>
                El ID de tu compra es {id}
                </Card.Text>
                <Button onClick={() => navigate('/')} variant="outline-secondary" >
                Volver al Home
                </Button>
            </Card.Body>
        </Card>
    } </div>
  )
}

export default Checkout