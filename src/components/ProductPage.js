import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';
let productsImport = require('../resources/products.json');


export const ProductPage = () => {

    const param = useParams()
    const product = productsImport.find(product => product.SKU === param.SKU);



    return (
        <Container >
            <Card className="text-white p-4 m-4" bg="dark">
                <Card.Body>
                <Card.Title className="text-white text-center">{product.name}, {product.version}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
            
                        <Row>
                                <Col >
                                    <Card className="shadow border-0">
                                        <ListGroup>
                                            <ListGroupItem active>Specifications</ListGroupItem>
                                            <ListGroupItem variant="dark">Size: {product.size} %</ListGroupItem>
                                            <ListGroupItem variant="dark">Mounting style: {product.mountingStyle}</ListGroupItem>
                                            <ListGroupItem variant="dark">Release date: {product.releaseDate}</ListGroupItem>
                                            <ListGroupItem variant="dark">Price: ${product.price}</ListGroupItem>
                                            <ListGroupItem variant="dark">Weight: {product.weight}g</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>

                                <Col >
                                    <Card className="shadow border-0">
                                        <ListGroup >
                                            <ListGroupItem active>Features</ListGroupItem>
                                            {product.features.map(feature =>
                                                <ListGroupItem variant="dark" key={feature} >{feature}</ListGroupItem>
                                            )}
                                        </ListGroup>
                                    </Card>

                                </Col>
                            
                            <div className="m-4">
                            <Image fluid src={product.images[0]} />
                            </div>
                        
                    </Row>



                    <Card.Title className="text-white mt-4 text-center">More pictures</Card.Title>                            
                    <Row>
                    
                        {product.images.map(image =>
                            <Col>
                                <Image fluid src={image} />
                            </Col>
                        )}

                    </Row>

                </Card.Body>


            </Card>
        </Container>

    )
}


