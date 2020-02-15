import React, { useEffect, useState } from 'react';
import { Card, Button, Image, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



export const ProductCard = ({ product, setComparison, buttonColor }) => {

    const [onOpen, setOnOpen] = useState(false);
    const handleClose = () => setOnOpen(false);
    const handleShow = () => setOnOpen(true);
    const history = useHistory();


    return (

        <Card style={{ width: '20rem' }} className="m-4 text-white border-0 shadow-lg" bg="dark">

            <ProductView onClose={handleClose} product={product} show={onOpen} />
            <Card.Img variant="top" fluid="true" src={product.image} />




            <Card.Body><Card.Title>{product.name}</Card.Title></Card.Body>

            <Button variant="secondary" className="rounded-0" onClick={()=>history.push(`/product/${product.name}`)}>Read more</Button>
            <Button disabled={buttonColor === "secondary"} variant={buttonColor} className="rounded-0" onClick={setComparison}>Compare</Button>

        </Card>

    )

}



export const ProductView = ({ onClose, product, show }) => {

    return (
        <Modal
            className="border-0 shadow"
            show={show}
            onHide={onClose}
            animation={true}
        >
            <Image fluid="true" src={product.image} />
            <Modal.Body className="text-white p-4">

                {product.description}
            </Modal.Body>
            <Button variant="danger" onClick={onClose}>Close</Button>
        </Modal>
    )
}



export const BigCard = ({ removeComparison, product }) => {

    return (
        <Card className="m-4 text-white border-0 shadow" bg="dark">
            <Card.Img variant="top" fluid="true" src={product.image} />

            <Card.Body>
                <Card.Title>{product.name}</Card.Title>

                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem variant="primary">Specifications</ListGroupItem>
                            <ListGroupItem variant="dark">Size: {product.size} %</ListGroupItem>
                            <ListGroupItem variant="dark">Mounting style: {product.mountingStyle}</ListGroupItem>
                            <ListGroupItem variant="dark">Release date: {product.releaseDate}</ListGroupItem>
                            <ListGroupItem variant="dark">Price: ${product.price}</ListGroupItem>
                            <ListGroupItem variant="dark">Weight: {product.weight}g</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroupItem variant="primary">Features</ListGroupItem>

                            {product.features.map(feature =>
                                <ListGroupItem key={feature} variant="dark">{feature}</ListGroupItem>

                            )}


                        </ListGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center p-4">{product.description}</Row>

            </Card.Body>
            <Button variant="danger" onClick={removeComparison}>Close</Button>
        </Card>
    )
}



export const BigCardPlaceholder = () => {

    return (
        <Card className="m-4 text-white border-0 shadow-lg" bg="superdark">
            <Card.Header><Card.Title>Product comparison</Card.Title></Card.Header>
            <Card.Body>


                <Card.Text className="text-center">You can click "compare" to place the product you want to compare here.</Card.Text>


            </Card.Body>
        </Card>
    )
}
