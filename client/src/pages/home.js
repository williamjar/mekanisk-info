import React, { Component } from 'react';
// components used 
import WelcomeBox from '../components/welcomeComponents'
import ProductGrid from '../components/productComponents'
import Products from '../classes/products'
import {Paper} from '@material-ui/core';
import MenuBar from '../components/menuBar';

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
            <MenuBar/>
            <Paper square elevation={2}>
            <ProductGrid products={products}/>
            </Paper>
            </div>
        )
    }
}

export default HomePage;