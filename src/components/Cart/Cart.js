import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Item from '../Item/Item';

const Cart = () => {

    const {cart, clear, removeItem} = useContext(CartContext)
  
    const prod = [...cart]
    console.log(prod)
    
    return (
      <div> 
        <Button variant="primary" onClick={clear}>Eliminar</Button>
        {prod.map (item =>
          <Card key={item.id} className="text-center">
            <Card.Header>Featured</Card.Header>
            <div className='row'>
              <Card.Img style={{ width: '10rem'}} className="col-4" src={item.img}/>
            <Card.Body className="col-6">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.count} x {item.price}
              </Card.Text>
            <Button variant="primary" onClick={()=>removeItem(item.id)}>Eliminar</Button>
            </Card.Body>
            </div>
            
          </Card>)}
      </div>
      );
}

export default Cart