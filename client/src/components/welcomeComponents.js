import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Card, CardContent, Box, Grid } from '@material-ui/core';

function WelcomeBox(){
    return( 

        <div>
        
                <Typography>Welcome to the website!</Typography>
                <Button variant="contained">Dette er en test</Button>
        </div>
    )
}

export default WelcomeBox;