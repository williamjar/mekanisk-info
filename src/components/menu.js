import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


export const Menu = () => {
    const history = useHistory();
    return (
        <div>
            <Button onClick={() => history.push("/")}>Home</Button>
            <Button onClick={() => history.push("/schedule")}>Schedule</Button>
            <Button onClick={() => window.open("https://mekanisk.co/")}>Go to store</Button>
            
        </div>
    )
}

