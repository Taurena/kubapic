import React from 'react'
import { Card } from "react-bootstrap";
import  ItemCount  from '../ItemCount/ItemCount'

function Item ({product}){
    return(
        <Card style={{ width: '18rem' }} className="card mx-auto" >
            <Card.Header className="text-center text-black-50">{product.category}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={product.img} />
                <Card.Text  className="text-center fs-3">
                    {product.name}
                </Card.Text>
                <button to={`/item/${product.id}`} className="btn btn-success">Ver detalles</button>
            </Card.Body>
            <Card.Footer className="fs-3">$ {product.price}</Card.Footer>
        </Card>   
    )
}
export default Item;