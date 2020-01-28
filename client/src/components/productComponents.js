import React, { Component } from 'react';
import {Card, Box, Paper,CardActionArea, CardMedia, Typography, Column, CardHeader, CardContent, CardActions,makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: 100,
        margin: 7,
        marginTop: 15,
        backgroundColor: "grey"
    },
    title: {
      fontSize: 14,
    },
    media: {
        height: 200,
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
        <Paper square elevation={2}>
        <Grid container direction="row" justify="center">
        {products.map((product)=>
            <ProductCard product={product}/>
        )}
        </Grid>
        </Paper>
    )
}


export default ProductGrid;