import React, { useEffect, useState } from 'react';
import { ProductCard, BigCard } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Image, Card,Row, Col  } from 'react-bootstrap';
let productsImport = require('../resources/products.json');







export const ProductComparison = () => {

        const productArray = productsImport;
        const [comparison,setComparison] = useState([]);

                       

        return(
                <div>
                 <Row className="justify-content-center">

                    {productArray.map(product =>
                        <ProductCard key={product.name} setComparison={() => setComparison([...comparison, product])} product={product} />
                    )}

                   </Row>

                   <Row className="justify-content-center">
                   <Image className="m-4" src="https://cdn.shopify.com/s/files/1/1347/2157/files/mekanisk-white_9415c58d-cb9d-48d7-885e-b5e1fec1df40_320x.png?v=1560371000" alt="Responsive image"/>
                   </Row>


                

                <CardDeck className="m-4">
                {comparison.map(cProduct =>
                        <BigCard product={cProduct} removeComparison={"ujaua"}/>
                        
                        )}
                </CardDeck>



        
                </div>
        )
}


