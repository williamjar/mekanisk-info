import React, { useEffect, useState } from 'react';
import { Card, Button,Image, Modal } from 'react-bootstrap';



export const ProductCard = ({product}) => {

    const [onOpen, setOnOpen] = useState(false);

    const handleClose = () => setOnOpen(false);
    const handleShow = () => setOnOpen(true);

        

    return(
        
        <Card style={{ width: '18rem' }}  className="m-4 text-white border-0" bg="dark">
            <ProductView onClose={handleClose} product={product} show={onOpen}/>

            <Card.Header>
                <Card.Img variant="top" fluid src={product.image} />
                <Card.Title>{product.name}</Card.Title>
            </Card.Header>
            <Button class="rounded-0" onClick={handleShow}>See more</Button>
        </Card>

        

       

    )

}



export const ProductView = ({onClose, product, show}) => {

    return(
        <Modal 
            class="border-0 shadow"
            show={show}
            centered
        >
        <Modal.Body class="text-white">
            <img width="500" src={product.image}/>
            {product.description}
        </Modal.Body>
        <Button variant="danger" onClick={onClose}>Close</Button>
        </Modal>
    )
}