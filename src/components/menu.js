import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


export const Menu = () => {
    const history = useHistory();
    return (
        <div className="mb-4">
            <Button className="ml-2" onClick={() => history.push("/")}>Home</Button>
            <Button className="ml-2" onClick={() => history.push("/productcomparison")}>Products</Button>
            <Button className="ml-2" onClick={() => history.push("/downloads")}>Downloads</Button>
            <Button className="ml-2" onClick={() => window.open("https://mekanisk.com/")}>Go to store</Button>
        </div>
    )
}


