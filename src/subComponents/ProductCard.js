import React, { useEffect, useState } from 'react';
import { Card, Button, Image, Table, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';



export const ProductCard = ({ product, setComparison,disabled, buttonColor }) => {

    const [onOpen, setOnOpen] = useState(false);
    const handleClose = () => setOnOpen(false);
    const handleShow = () => setOnOpen(true);

    const [buttonDisabled, setButtonDisabled] = useState(false);
    

    return (

        <Card style={{ width: '20rem' }} className="m-4 text-white border-0 shadow" bg="dark">

            <ProductView onClose={handleClose} product={product} show={onOpen} />

            <Card.Header>
                <Card.Img variant="top" fluid="true" src={product.image} />
                <Card.Title>{product.name}</Card.Title>
            </Card.Header>

            <Button variant="secondary" className="rounded-0" onClick={handleShow}>Read more</Button>
            <Button disabled={buttonColor==="danger"}variant={buttonColor} className="rounded-0" onClick={setComparison}>Compare</Button>

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

            <Modal.Body className="text-white p-4">
                <Image fluid="true" width="500" height="500" src={product.image} />
                {product.description}
            </Modal.Body>
            <Button variant="danger" onClick={onClose}>Close</Button>
        </Modal>
    )
}



export const BigCard = ({ removeComparison, product }) => {

    return (
        <Card className="m-4 text-white border-0 shadow" bg="dark">
            <Card.Header><Card.Title>{product.name}</Card.Title></Card.Header>
            <Card.Body>


                <Row className="justify-content-center"><Image fluid="true" width="200" src={product.image} /></Row>

                <Row className="justify-content-center">
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
                                <ListGroupItem variant="dark">{feature}</ListGroupItem>

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
        <Card className="m-4 text-white border-0 shadow" bg="superdark">
            <Card.Header><Card.Title>Product comparison</Card.Title></Card.Header>
            <Card.Body>


                <Card.Text className="text-center">You can click "compare" to place the product you want to compare here.</Card.Text>


            </Card.Body>
        </Card>
    )
}

// big cards on the bottom so you can easily compare