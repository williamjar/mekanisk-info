import React from 'react';
import { Card, Button, Image, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';



export class Menu extends React.Component {


    render(){
        return(
            <div>
                <Button onClick={() => window.open("https://mekanisk.co/")}>Go to store</Button>
                
            </div>
            
            
        )
    }

}

export default Menu;