import React, { useEffect, useState } from 'react';
import { ProductCard } from '../subComponents/ProductCard';
import { Container, CardDeck, Modal, CardGroup, CardColumns, Card,Row, Col  } from 'react-bootstrap';
let products = require('../resources/products.json');

export const Content = () => {

        


        return(
                <div>
                 <Row className="justify-content-center">

                    {products.map(product =>
                        <ProductCard product={product} onOpen={handleShow}/>

                    )}

                   </Row>

                  

                </div>
        )
}


