import React, { useEffect, useState } from 'react';
import { Card, Button, ProgressBar, Image, Row, Col, ListGroup, Modal, ListGroupItem } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSpring, animated } from 'react-spring';



export const ProductCard = ({ product, setComparison, buttonColor, comparable }) => {

    const [onOpen, setOnOpen] = useState(false);
    const handleClose = () => setOnOpen(false);
    const history = useHistory();

    const jumpIn = useSpring({
        from: { transform: 'translate3d(0,-100px,0)', opacity: 0 }, transform: 'translate3d(0,0,0)', opacity: 1
    })

    return (
        <animated.div style={jumpIn}>
            
            <Card className="m-2 p-2 border-0 shadow-lg" bg="dark">
                <Row>
                <ProductView onClose={handleClose} product={product} show={onOpen} />
                <Card.Body>
                
                <Card.Title>{product.name}</Card.Title>
                <Card.Title className="text-muted">{product.version}</Card.Title>
                
                </Card.Body>

                <Button className="m-3" variant="secondary" onClick={() => history.push(`/keyboard/${product.SKU}`)}>Read more</Button>
                <Button className="m-3" disabled={buttonColor === "secondary"} hidden={!comparable} variant={buttonColor} onClick={setComparison}>Compare</Button>
                </Row>
            </Card>
        </animated.div>

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
            <Image fluid="true" src={product.images[0]} />
            <Modal.Body className="p-4">

                {product.description}
            </Modal.Body>
            <Button variant="danger" onClick={onClose}>Close</Button>
        </Modal>
    )
}



export const BigCard = ({ removeComparison, product }) => {
    const jumpIn = useSpring({
        from: { transform: 'translate3d(0,-100px,0)', opacity: 0 }, transform: 'translate3d(0,0,0)', opacity: 1
    })
    return (
        <animated.div style={jumpIn}>
            <Card className="m-2 border-0 shadow-lg" bg="dark" >
                <Button variant="danger" onClick={removeComparison}>Close</Button>
                <Card.Img variant="top" fluid="true" src={product.images[0]} />

                <Card.Body>

                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title>{product.version}</Card.Title>


                    <ListGroup >
                        <ListGroupItem active>Specifications</ListGroupItem>
                        <ListGroupItem variant="dark">Size: {product.size} %</ListGroupItem>
                        <ListGroupItem variant="dark">Mounting style: {product.mountingStyle}</ListGroupItem>
                        <ListGroupItem variant="dark">Release date: {product.releaseDate}</ListGroupItem>
                        <ListGroupItem variant="dark">Price: ${product.price}</ListGroupItem>
                        <ListGroupItem variant="dark">Weight: {product.weight}g</ListGroupItem>
                    </ListGroup>


                    <ListGroup >
                        <ListGroupItem active>Features</ListGroupItem>
                        {product.features.map(feature =>
                            <ListGroupItem variant="dark" key={feature} >{feature}</ListGroupItem>
                        )}
                    </ListGroup>






                </Card.Body>

            </Card>
        </animated.div>
    )
}

export const BigCardPlaceholder = () => {

    return (

        <Card className="text-white m-4 border-0 shadow-lg" bg="superdark">
            <Card.Header><Card.Title>Product comparison</Card.Title></Card.Header>
            <Card.Body>
                <Card.Text className="text-center">You can click "compare" to place the product you want to compare here.</Card.Text>
            </Card.Body>
        </Card>

    )
}
