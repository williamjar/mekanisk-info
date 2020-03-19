import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';
let productsImport = require('../resources/products.json');


export const Help = () => {

    return (
        <Container >
            <Card className="text-white p-4" bg="dark">

                <Card.Body>
                This means that the product is around 60% ready for release:
                <Row className="mb-4">
                        <Col>
                        <ProgressBar variant="info" now={60}/>
                        </Col> 
                        <Col>
                        </Col>
                    
                </Row>

                This means that the product has finished design:
                <Row className="mb-4">
                        <Col>
                        <ProgressBar variant="info" now={100}/>
                        </Col> 
                        <Col>
                        </Col>
                    
                </Row>


                This means that the product is currently live in the store:
                <Row className="b-4">
                        <Col>
                        <ProgressBar variant="liveGreen" now={100}/>
                        </Col> 
                        <Col>
                        </Col>
                    
                </Row>

                <br/>
                Round is indicated by the letter R and a number. This is the round, or revision of the product. The newest revision is always the one that will be sold.

                <br/>
                Sorting for the main page will be implemented.

                </Card.Body>

                    

            </Card>
        </Container>

    )
}


