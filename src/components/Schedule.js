import React, {useState, useEffect} from 'react';
import { Card, Button, ProgressBar, Image, Row, Col, ListGroup, Modal, ListGroupItem, FormLabel } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {useKey} from '../Hooks'
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
let productsImport = require('../resources/products.json');

export const Schedule = () => {
    const history = useHistory();

    const [schedule, setSchedule] = useState([])

    useEffect(()=>{
        const returnSchedule = []
        productsImport.map(product=>{
            if(product.nextReleasedate!==null){
                returnSchedule.push(product)
            }
            setSchedule(returnSchedule)
        })
    },productsImport)

        
    const getYearPercentage = () =>{
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(2020, 1, 1);
        const secondDate = new Date();
        let days =  Math.round(Math.abs((firstDate - secondDate) / oneDay))
        return (days/365)*100

    }
    return (

        <div>
            
        <Row className="justify-content-center text-white">
            {schedule.map(product => 

            <div>
                <Card className="m-4 text-center" bg="dark"><Card.Body><Card.Title>{product.nextReleasedate}</Card.Title></Card.Body></Card>
                <ProductCard  comparable={false} product={product}></ProductCard>
            </div>
                
                )}
                
        </Row>
        

        <Row className="mb-4">
                <Col>
                
                </Col>
                
        </Row>
    
                </div>
    
        
    )
}
