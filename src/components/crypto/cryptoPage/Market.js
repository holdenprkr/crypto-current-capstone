import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default ({ market }) => {

    return (
        <div className="marketCardContainer">
            <Card className="marketCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={market.logo} />
                <Card.Body>
                    <Card.Title>{market.name}</Card.Title>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Button className="favoriteButton" variant="primary">Visit</Button>
                </Card.Body>
            </Card>
        </div>
    );
};