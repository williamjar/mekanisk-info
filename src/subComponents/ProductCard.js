import React, { useEffect, useState } from 'react';
import { Card, Button,Image,Table,Row,Col,ListGroup, Modal, ListGroupItem } from 'react-bootstrap';



export const ProductCard = ({product, setComparison}) => {

    const [onOpen, setOnOpen] = useState(false);
    const handleClose = () => setOnOpen(false);
    const handleShow = () => setOnOpen(true);

        

    return(
        
        <Card style={{ width: '20rem' }}  className="m-4 text-white border-0" bg="dark">

            <ProductView onClose={handleClose} product={product} show={onOpen}/>

            <Card.Header>
                <Card.Img variant="top" fluid="true" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
            </Card.Header>
            
            <Button variant="secondary" className="rounded-0" onClick={handleShow}>Read more</Button>
            <Button variant="primary" className="rounded-0" onClick={setComparison}>Compare</Button>

        </Card>

    )

}



export const ProductView = ({onClose, product, show}) => {

    return(
        <Modal 
            className="border-0 shadow"
            show={show}
            onHide={onClose} 
            animation={true}
        >
            
        <Modal.Body className="text-white p-4">
            <Image fluid="true" width="500" src={product.image}/>
            {product.description}
        </Modal.Body>
        <Button variant="danger" onClick={onClose}>Close</Button>
        </Modal>
    )
}



export const BigCard = ({removeComparison, product, show}) => {

    return(
        <Card style={{ width: '25rem' }} className="m-4 text-white border-0" bg="dark">
            <Card.Header><Card.Title>{product.name}</Card.Title></Card.Header>
            <Card.Body>

                {product.description}

                <ListGroup>

                <ListGroupItem variant="dark">Mounting style: {product.mountingStyle}</ListGroupItem>
                <ListGroupItem variant="dark">Release date: {product.releaseDate}</ListGroupItem>
                <ListGroupItem variant="dark">Price: {product.price}</ListGroupItem>

                </ListGroup>
                
        
            </Card.Body>
            <Button variant="danger" onClick={removeComparison}>Close</Button>
        </Card>
    )
}


// big cards on the bottom so you can easily compare