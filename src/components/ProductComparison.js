import React, { useEffect, useState } from 'react';
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck,Accordion, ListGroup, Modal, CardGroup, CardColumns, Image, Card, Row, Col, Button, ListGroupItem } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring';
let productsImport = require('../resources/products.json');



export const ProductComparison = () => {

        const jumpIn = useSpring({
                from: {transform:'translate3d(0,-50px,0)', opacity:0}, transform:'translate3d(0,0,0)',opacity:1
            })

        const productArray = productsImport;
        const [comparison, setComparison] = useState([]);
        const checkColor =(product) =>{

                if(comparison.indexOf(product) === -1) return "primary";
                else return "secondary";
        }

        const handleRemove = (cProduct) => {
                let index = comparison.indexOf(cProduct);
                setComparison(comparison.filter((_, i) => i !== index));
        }

        const handleAddition = (product) => {
                if (comparison.length < 4 && comparison.indexOf(product) === -1) {
                        setComparison([...comparison, product]);
                }
        }
        
        return (
                <Container fluid>
                       
                       <Card bg="dark" className="p-3 m-3 text-white">
                       <Accordion defaultActiveKey="0">
                                
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button>Toggle product list</Button>
                                </Accordion.Toggle>
                                Scroll down to view comparison.
                                <Accordion.Collapse eventKey="0">
                                <ListGroup>
                                {productArray.map(product =>
                                        
                                        <ProductCard comparable={true} key={product.name} buttonColor={checkColor(product)} setComparison={() => handleAddition(product)} product={product} />
                                        
                               )}
                               </ListGroup>
                               
                               </Accordion.Collapse>
                               
                               </Accordion>
                        </Card>
                        

                        <Row className=" justify-content-center  ">
                                Scroll down to view the comparison
                        </Row>
                        
                        <Row className="justify-content-center"> 
                        <Button disabled={comparison.length===0} onClick={() => setComparison([])} variant="danger">Remove all comparisons</Button>
                        </Row>
                        
                       

                        <CardDeck className="mt-4" >
                                
                       
                                {comparison.map(cProduct =>
                                        <Col>
                                        <BigCard key={cProduct.name} product={cProduct} removeComparison={() => handleRemove(cProduct)} />
                                        </Col>
                                        
                                )}
                               

                                {comparison.length === 1 ? (<Col><BigCardPlaceholder /></Col>) : (null)}

                        </CardDeck>
                       

                </Container>
        )
}


