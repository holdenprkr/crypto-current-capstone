import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default ({ crypto }) => {

    return (
        <div className="cryptoCardContainer">
            <Card className="cryptoCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={crypto.logo} />
                <Card.Body>
                    <Card.Title>{crypto.crypto}</Card.Title>
                    <Card.Text>
                        Code: {crypto.code}
                    </Card.Text>
                    <Button className="favoriteButton" variant="primary">Watch</Button>
                </Card.Body>
            </Card>
        </div>
    );
};