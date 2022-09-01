import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, clear, removeItem, getItemPrice} = useContext(CartContext)
  
    return (
      <div className="text-center">{ cart.length === 0 ? 
      <div>
        <h1> No hay productos en tu carrito</h1>
        <Button as={Link} to="/" variant="outline-secondary">Volver a la tienda</Button>
      </div> :
      <div> {cart.map (item =>
        <Card key={item.id} className="w-50 p-3">
          <Card.Header>{item.categoryId}</Card.Header>
            <div className='row'>
            <Card.Img style={{ width: '10rem'}} className="col-4" src={item.img}/>
          <Card.Body className="col-6">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.count} x {item.price}
            </Card.Text>
                <Button  variant="outline-secondary"  onClick={()=>removeItem(item.id)}>Eliminar</Button>
          </Card.Body> 
            </div>
        </Card>)} 
            <h2>Total: ${getItemPrice()}</h2>
            <Button variant="outline-secondary" className="mx-3" onClick={clear}>Vaciar carrito</Button>
            <Button variant="outline-secondary"><Link to={`/checkout`}> Terminar mi Compra </Link></Button>
        </div> 
        }   
      </div>
      );
}

export default Cart
