import React from 'react';
import { Card } from 'react-bootstrap';



export const ProductPage = (props) => {


    return(
        <Card>
            <Card.Header>
                <Card.Img variant="top" src={props.image} />
                <Card.Title>{props.title}</Card.Title>
            </Card.Header>

            <Card.Body>
                
                {props.bodyText}
                
            </Card.Body>
            
        </Card>

    )


}