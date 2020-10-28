import React from 'react';
import { Card, Button, Nav,  Image, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';



export class Footer extends React.Component {


    render(){
        return(
            <div className="text-muted text-center mt-4">                
                Thank you for using Mekanisk.xyz.

                We are working on making a support-system for Mekanisk which will include a redesign of this page. Estimated December 2020. 

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