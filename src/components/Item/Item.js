import React from 'react'
import { Card } from "react-bootstrap";

function Item ({product}){
    const {id, img, name, price, category}= product
    return(
        <Card style={{ width: '18rem' }} className="card mx-auto" >
            <Card.Header className="text-center text-black-50">{category}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Text  className="text-center fs-3">
                    {name}
                </Card.Text>
                <button to={`/item/${id}`} className="btn btn-success">Ver detalles</button>
            </Card.Body>
            <Card.Footer className="fs-3">$ {price}</Card.Footer>
        </Card>   
    )
}
export default Item;