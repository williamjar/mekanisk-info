import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button, ProgressBar, InputGroup } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';
let productsImport = require('../resources/products.json');
let factoryImport = require('../resources/factory.json');
let messageImport = require('../resources/message.json');

export const Downloads = () => {

    return (
        <Container>
            <Card className="text-white mt-4 p-4" bg="dark">
            <Card.Text>Here you can find various downloads available from Mekanisk. You can use them however you want. If you want to use them for commercial projects, I would appericate if you contact william@mekanisk.co, and I will help you out. The designs come with no warranty in any way.</Card.Text>
            </Card>

            <Card className="text-white mt-4 p-4" bg="dark">
            <Card.Title>Mekanisk Open 60T</Card.Title>
            <Card.Text>60% tray mount case based on the Fjell and Klippe. If you want rubber bumpons I suggest making indents for them under the case. 8mm diameter x 2mm depth for generic bumpons or four (15mm x 5mm + 15mm x 5mm in viewfinder pattern) for Mekanisk Bumpons. The suggested depth for Mekanisk bumpons are 0.8mm.</Card.Text>
            <Button onClick={()=>window.open("https://cdn.shopify.com/s/files/1/1347/2157/files/MEKANISKOS60T.step?v=1589117659")} >Direct Download (STEP)</Button>
            </Card>

        </Container>
    )

    

}


