import React, { Component } from 'react';
// components used 
import WelcomeBox from '../components/welcomeComponents'
import ProductGrid from '../components/productComponents'
import Products from '../classes/products'
import {Paper, AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    img: {
      margin: 12,
    }
  }));
const MenuBar = (props) => {
const classes = useStyles();

return(
    <AppBar position="static" color="primary">
  <Toolbar variant="dense">
  <img className={classes.img} width={200} src={'https://cdn.shopify.com/s/files/1/1347/2157/files/mekanisk-white_9415c58d-cb9d-48d7-885e-b5e1fec1df40_320x.png?v=1560371000'}></img>
  </Toolbar>
</AppBar>
    )
}


export default MenuBar;