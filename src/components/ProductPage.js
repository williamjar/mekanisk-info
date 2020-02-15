import React, { useEffect , useState } from 'react';
import { useParams} from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Image, Card, Row, Col, Button } from 'react-bootstrap';
let productsImport = require('../resources/products.json');


export const ProductPage = () => {

    const param = useParams()
    const product = productsImport.find(product => product.name===param.name);



    return (
        <Container fluid>
            <div className="text-white text-center"> Here comes the {product.name} detailed product page</div>
        </Container>
        
    )
}


