import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CryptoFavoriteContext } from "./CryptoFavoriteProvider";

export default ({ crypto }) => {
    const { addCryptoFavorite } = useContext(CryptoFavoriteContext)

    return (
        <div className="cryptoCardContainer">
            <Card className="cryptoCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={crypto.logo} />
                <Card.Body>
                    <Card.Title>{crypto.crypto}</Card.Title>
                    <Card.Text>
                        Code: {crypto.code}
                    </Card.Text>
                    <Button className="favoriteButton" variant="primary"
                    onClick={() => {
                        const cryptoFav = {
                            cryptoId: crypto.id,
                            activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
                          }
                        addCryptoFavorite(cryptoFav)
                      }}
                    >Watch</Button>
                </Card.Body>
            </Card>
        </div>
    );
};