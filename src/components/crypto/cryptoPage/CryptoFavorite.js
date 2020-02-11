import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CryptoFavoriteContext } from "./CryptoFavoriteProvider";

export default ({ cryptoFav }) => {
    const { deleteCryptoFavorite } = useContext(CryptoFavoriteContext)

    return (
        <div className="cryptoCardContainer">
            <Card className="cryptoCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={cryptoFav.crypto.logo} />
                <Card.Body>
                    <Card.Title>{cryptoFav.crypto.crypto}</Card.Title>
                    <Card.Text>
                        Code: {cryptoFav.crypto.code}
                    </Card.Text>
                    <Button className="favoriteButton" variant="primary"
                    onClick={() => {
                        deleteCryptoFavorite(cryptoFav.id)
                      }}
                    >Remove from Watchlist</Button>
                </Card.Body>
            </Card>
        </div>
    );
};