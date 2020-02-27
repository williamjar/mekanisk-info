import React from 'react';
import { Card, Button, Nav,  Image, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';



export class Footer extends React.Component {


    render(){
        return(
            <div className="text-muted text-center">                
                Thank you for using Mekanisk.xyz.

                This web app is in very early stages of production.
                Want to hire me? william@mekanisk.co

                <Nav className="justify-content-center" >
                    <Nav.Item>
                    <Nav.Link href="/">Go to home page</Nav.Link>
                    </Nav.Item>
                    </Nav>
            </div>
            
            
        )
    }

}

export default Footer;