import React, { Component } from 'react';
// components used 
import WelcomeBox from '../components/welcomeComponents'
import ProductGrid from '../components/productComponents'
import Products from '../classes/products'
import {Paper, makeStyles} from '@material-ui/core';
import MenuBar from '../components/menuBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export class Content extends React.Component {

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
            
            <ProductGrid products={products}/>
            
            </div>
        )
    }

}

export default Content;