import React from 'react'
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Item ({product}){
    const {id, img, name, price}= product
    
    return(
        <Card className="card" >
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Text  >
                    {name}
                </Card.Text>
                <Link to={`/item/${id}`} className="btn shadow-sm">Ver detalles</Link>
            </Card.Body>
            <Card.Footer>$ {price}</Card.Footer>
        </Card>   
    )
}
export default Item;