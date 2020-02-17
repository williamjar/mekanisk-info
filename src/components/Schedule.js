import React, {useState, useEffect} from 'react';
import { Card, Button, Image, Row, Col, ListGroup, Modal, ListGroupItem, FormLabel } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ProductCard } from '../subComponents/ProductCard';

let productsImport = require('../resources/products.json');

export const Schedule = () => {
    const history = useHistory();



    return (
        <Row className="justify-content-center text-white">

             Here comes the schedule
            
        </Row>
        
    )
}
