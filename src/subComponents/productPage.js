import React from 'react';
import { Card } from 'react-bootstrap';



export const ProductCard = (props) => {

    return(
        <Card style={{ width: '18rem' }} className="m-4 text-white" bg="dark">
            <Card.Header>
                <Card.Img variant="top" fluid src={props.product.image} />
                <Card.Title>{props.product.name}</Card.Title>
            </Card.Header>

            <Card.Body>
                {props.product.description}
            </Card.Body>

            <Card.Footer>
            Size: {props.product.size} %
            </Card.Footer>
            
        </Card>

    )


}