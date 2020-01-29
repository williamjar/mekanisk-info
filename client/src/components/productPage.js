import React, { Component } from 'react';
import {Card, Box, Paper,CardActionArea, CardMedia, Typography, Column, CardHeader, CardContent, CardActions,makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: 100,
        margin: 7,
        marginTop: 15,
        backgroundColor: "#505050"
    },
    title: {
      fontSize: 14,
    },
    media: {
        height: 200,
      },
  });

const ProductPage = (props) => {
    const classes = useStyles();
    let product = props.product;
    return(
    
        <Paper>
            <Typography>{product.title}</Typography>
        </Paper>
        
    )
}


export default ProductPage;