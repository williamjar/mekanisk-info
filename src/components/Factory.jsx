import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, ListGroup, ListGroupItem, Image, Card, Row, Col, Button, ProgressBar, InputGroup } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';
let productsImport = require('../resources/products.json');
let factoryImport = require('../resources/factory.json');

export const Factory = () => {

    return (
        <Container>

            {factoryImport.map(product=>
                
                <Card className="text-white m-4 p-4" bg="dark">

                <Card.Title>{product.name} </Card.Title>
                <Card.Text className="text-muted">{product.version}</Card.Text>
                
                <Card.Text>{getStageOp(product.stage)}</Card.Text>

                <ProgressBar animated  now={getStageProgress(product.stage)}/>

                <Card.Text>Estimated shipping: {product.estShippingDate}</Card.Text>

                </Card>
        
            )}
        </Container>
    )

    function getStageOp(stage){
        if(stage===0){
            return "Waiting to place order with Mekanisk Manufacturing"
        }

        if(stage===1){
            return "Order placed with Mekanisk Manufacturing"
        }

        if(stage===2){
            return "In production"
        }

        if(stage===3){
            return "In quality control and packaging"
        }

        if(stage===4){
            return "Shipping has started"
        }
    }

    function getStageProgress(stage){
        if(stage===0){
            return 5
        }

        if(stage===1){
            return 25
        }

        if(stage===2){
            return 50
        }

        if(stage===3){
            return 75
        }

        if(stage===4){
            return 100
        }
    }

}


