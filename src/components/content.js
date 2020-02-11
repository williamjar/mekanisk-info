import React from 'react';
import { ProductCard } from '../subComponents/productPage';
import { Container, CardDeck, CardGroup, CardColumns, Card,Row, Col  } from 'react-bootstrap';
let products = require('../resources/products.json');

export class Content extends React.Component {
    
    render(){
        return(
            
                 <Row className="justify-content-center">
                    {products.map(product =>
                    
                    <ProductCard product={product}/>
                        
                    )}
                   </Row>

                
                
            
        )
    }

}


export default Content;