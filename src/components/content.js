import React from 'react';
import { ProductPage } from '../subComponents/productPage';
import { Container } from 'react-bootstrap';

export class Content extends React.Component {
    
    render(){
        return(
            <Container className="m4">
            <ProductPage title={"hashdahsdha"} bodyText={"ahsdhahsdhasd"} image={"https://images-na.ssl-images-amazon.com/images/I/81wRXdAOmkL._SL1500_.jpg"}/>
            </Container>
        )
    }

}


export default Content;