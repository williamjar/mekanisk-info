import React, { Component } from 'react';
import {Card, Box,CardActionArea, CardMedia, Typography, Column, CardHeader, CardContent, CardActions,makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: 100,
        margin: 10
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginTop: 12,
    },
    media: {
        height: 140,
      },
  });

const ProductCard = (props) => {
    const classes = useStyles();
    let product = props.product;
    return(
    
        <Card className={classes.card} square>
            <CardActionArea>

            <CardMedia className={classes.media} image={product.image}/>

            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {product.name}
            </Typography>

            <Typography className={classes.title}>
            {product.price}, {product.layout};
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        
    )
}

const ProductGrid = (props) => {
    let products = props.products;
    return(
    
        <Grid container direction="row" justify="center" alignItems="center">
        {products.map((product)=>
            <ProductCard product={product}/>
        )}
        </Grid>
    )
}


export default ProductGrid;