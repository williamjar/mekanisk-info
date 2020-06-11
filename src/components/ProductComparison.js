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
                       
                       <Col>
                       <Accordion defaultActiveKey="1">
                                
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <Button>Show all products</Button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <ListGroup>
                                {productArray.map(product =>
                                        <animated.div style={jumpIn}>
                                        <ProductCard comparable={true} key={product.name} buttonColor={checkColor(product)} setComparison={() => handleAddition(product)} product={product} />
                                        </animated.div>
                               )}
                               </ListGroup>
                               
                               </Accordion.Collapse>
                               
                               </Accordion>
                        </Col>
                        

                        <Row className="justify-content-center  ">
                                <Image className="m-4" width="500" src="https://cdn.shopify.com/s/files/1/1347/2157/files/websitelogo.png?v=1588832402" alt="Responsive image" />
                                
                        </Row>
                        
                        <Row className="justify-content-center"> 
                        <Button disabled={comparison.length===0} onClick={() => setComparison([])} variant="danger">Remove all comparisons</Button>
                        </Row>
                        
                       

                        <CardDeck className="mt-4" >
                                
                       
                                {comparison.map(cProduct =>
                                        <Col>
                                        <animated.div style={jumpIn}>
                                        <BigCard key={cProduct.name} product={cProduct} removeComparison={() => handleRemove(cProduct)} />
                                        </animated.div>
                                        </Col>
                                        
                                )}
                               

                                {comparison.length === 1 ? (<Col><BigCardPlaceholder /></Col>) : (null)}

                        </CardDeck>
                       

                </Container>
        )
}


