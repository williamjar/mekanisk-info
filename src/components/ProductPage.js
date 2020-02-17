import React, { useEffect , useState } from 'react';
import { useParams} from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Image, Card, Row, Col, Button } from 'react-bootstrap';
let productsImport = require('../resources/products.json');


export const ProductPage = () => {

    const param = useParams()
    const product = productsImport.find(product => product.SKU===param.SKU);



    return (
        <Container fluid>
            <Card className="text-white m-4" bg="dark">
            
            <Card.Header>
            <Card.Title className="text-white text-center">{product.name}</Card.Title>
            </Card.Header>

            <Card.Body>
            {product.description}
            <Card.Img  src={product.images[0]}></Card.Img>
            </Card.Body>
           
            
            </Card>
        </Container>
        
    )
}


