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
  }));
const MenuBar = (props) => {
const classes = useStyles();

return(
    <AppBar position="static" color="primary">
  <Toolbar variant="dense">
    <Typography variant="h6" className={classes.title}>
      Mekanisk
    </Typography>
  </Toolbar>
</AppBar>
    )
}


export default MenuBar;