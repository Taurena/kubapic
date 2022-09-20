import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import {Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Template from '../Template/Template';

const Cart = () => {

  const {cart, clear, removeItem, getItemPrice} = useContext(CartContext)
  
    return (
      <Template title='Carrito de compras'>
        <hr/>
      <div> 
        
        {cart.length === 0 ? 
        <div className='emptyCart'> 
          <h2> No hay productos en tu carrito</h2>
          <Button as={Link} to="/" variant="outline-secondary">Volver a la tienda</Button>
        </div> :
      <div>
        <Row className='mr-3 p-3 cart'>
          <Col sm={9}>
            <Row className="p-3 mb-2 bg-light text-dark">
              <Col>Articulo</Col>
              <Col>Cantidad</Col>
            </Row>
          {cart.map (item =>
            <Row className="border mr-3 p-3"  key={item.id}>
              <Col sm={4} >
                <img style={{ width: '10rem'}} alt={item.name} src={item.img}/>
              </Col>
              <Col>
                <Row>
                  <h3 className='col'>{item.name}</h3>
                  <p className='col'>
                      {item.count} x {item.price}
                  </p>
                </Row>
                <hr/>
                <Button  variant="outline-secondary" onClick={()=>removeItem(item.id)}>Eliminar</Button>
              </Col>
            </Row>)}
          </Col>
          <Col sm={3} className="border p-3">
            <h2>Total: ${getItemPrice()}</h2>
            <Button className='m-3' variant="outline-secondary" as={Link} to="/checkout"> Terminar mi Compra </Button>
          </Col>
        </Row>
          <Button className='m-3' variant="outline-secondary" onClick={clear}>Vaciar carrito</Button>
      </div>
        }   
      </div>
      </Template>
      );
}

export default Cart
