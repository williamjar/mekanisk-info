import React, { Component } from 'react';
// components used 
import WelcomeBox from '../components/welcomeComponents'


export class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            _mounted: false,
        }
    }


    render(){
        return(
            <div>
            <WelcomeBox/>
            </div>
        )
    }
}

export default HomePage;