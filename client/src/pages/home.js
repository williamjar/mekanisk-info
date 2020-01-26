import React, { Component } from 'react';
// components used 
import WelcomeBox from '../components/welcomeComponents'
import ProductList from '../components/productComponents'
import Products from '../classes/products'

export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            _mounted: false,
        }
    }
    
    componentDidMount(){
    }

    render(){
        const products = Products.getProducts();
        return(
            <div>
            <WelcomeBox/>
            <ProductList products={products}/>
            </div>
        )
    }
}

export default HomePage;