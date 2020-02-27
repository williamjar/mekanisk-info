import React, { useEffect, useState } from 'react';
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Image, Card, Row, Col, Button } from 'react-bootstrap';
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
                       
                        <Row className="justify-content-center">
                                {productArray.map(product =>
                                        <animated.div style={jumpIn}>
                                        <ProductCard comparable={true} key={product.name} buttonColor={checkColor(product)} setComparison={() => handleAddition(product)} product={product} />
                                        </animated.div>
                               )}
                        </Row>
                        

                        <Row className="justify-content-center  ">
                                <Image className="m-4" src="https://cdn.shopify.com/s/files/1/1347/2157/files/mekanisk-white_9415c58d-cb9d-48d7-885e-b5e1fec1df40_320x.png?v=1560371000" alt="Responsive image" />
                                
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


