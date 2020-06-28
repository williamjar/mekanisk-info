import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button, ProgressBar, InputGroup } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';
let productsImport = require('../resources/products.json');
let factoryImport = require('../resources/factory.json');
let messageImport = require('../resources/message.json');

export const Factory = () => {

    return (
        <Container>

<Row className="justify-content-center  ">
                                <Image className="m-4" width="500" src="https://cdn.shopify.com/s/files/1/1347/2157/files/websitelogo.png?v=1588832402" alt="Responsive image" />
                                
                        </Row>
            <Card.Text className="">Last updated: 11/06/2020 (DD/MM/YYYY)</Card.Text>
            

            {messageImport.map(message =>
            <Card className=" mt-4 p-4" bg="dark">
            
            <Card.Text className="">{message.date}</Card.Text>
            <Card.Text className="">{message.body}</Card.Text>
            

            </Card>

            )}
            
            {factoryImport.map(product=>
                <Card className=" mt-4 p-4" bg="dark">
                <Card.Title>{product.name} </Card.Title>
                <Card.Text className="text-muted">{product.version}</Card.Text>
                <Row>
                    <Col>
                    <ProgressBar animated={product.stage===0} now={getStageProgress(product.stage, 0)}/> 
                    <Card.Text className="text-center">Pre order</Card.Text>
                    </Col>
                    <Col>
                   
                    <ProgressBar animated={product.stage===1} now={getStageProgress(product.stage, 1)}/>
                    <Card.Text className="text-center">Arranging manufacturing</Card.Text>
                    </Col>

                    <Col>
                    <ProgressBar animated={product.stage===2} now={getStageProgress(product.stage, 2)}/>
                    <Card.Text className="text-center">In production</Card.Text>
                    </Col>

                    <Col>
                    <ProgressBar animated={product.stage===3} now={getStageProgress(product.stage, 3)}/>
                    <Card.Text className="text-center">Quality control</Card.Text>
                    </Col>

                    <Col>
                    <ProgressBar animated={product.stage===4} now={getStageProgress(product.stage, 4)}/>
                    <Card.Text className="text-center">Shipping to customers</Card.Text>
                    </Col>

                    

                </Row>
                <Row className="mt-4">
                <Col/>
                <Col/>
                <Col/>
                <Col/>
                <Col>
                    <ProgressBar animated={product.stage===5} now={getStageProgress(product.stage, 5)}/>
                    <Card.Text className="text-center">Extras</Card.Text>
                    </Col>
                </Row>
                <br/>
                <Card.Text>Estimated shipping: {product.estShippingDate}</Card.Text>
                </Card>
            )}
        </Container>
    )

    function getStageProgress(stage, progressBarNumber){
        if(stage<progressBarNumber){
            return 0
        } else{
            return 100
        }
    }
    

}


