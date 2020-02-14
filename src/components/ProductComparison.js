import React, { useEffect, useState } from 'react';
import { ProductCard, BigCard, BigCardPlaceholder } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Image, Card, Row, Col, Button } from 'react-bootstrap';
let productsImport = require('../resources/products.json');







export const ProductComparison = () => {

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
                                        <ProductCard key={product.name} buttonColor={checkColor(product)} setComparison={() => handleAddition(product)} product={product} />
                                )}

                        </Row>

                        <Row className="justify-content-center">
                                <Image className="m-4" src="https://cdn.shopify.com/s/files/1/1347/2157/files/mekanisk-white_9415c58d-cb9d-48d7-885e-b5e1fec1df40_320x.png?v=1560371000" alt="Responsive image" />
                                
                        </Row>

                        <Row className="justify-content-center"> 
                        <Button disabled={comparison.length===0} onClick={() => setComparison([])} variant="danger">Remove all comparisons</Button>
                        </Row>
                        

                        <CardDeck className="m-4 justify-content-center">

                                {comparison.map(cProduct =>
                                        <BigCard key={cProduct.name} product={cProduct} removeComparison={() => handleRemove(cProduct)} />

                                )}

                                {comparison.length === 1 ? (<BigCardPlaceholder />) : (null)}

                        </CardDeck>

                </Container>
        )
}


