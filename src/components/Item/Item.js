import React from 'react'
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Item ({product}){
    const {id, img, name, price, categoryId}= product
    return(
        <Card style={{ width: '18rem' }} className="card mx-auto" >
            <Card.Header className="text-center text-black-50">{categoryId}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Text  className="text-center fs-4">
                    {name}
                </Card.Text>
                <Link to={`/item/${id}`} className="btn shadow-sm bg-light">Ver detalles</Link>
            </Card.Body>
            <Card.Footer className="fs-3">$ {price}</Card.Footer>
        </Card>   
    )
}
export default Item;