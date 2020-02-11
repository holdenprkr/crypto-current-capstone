import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { MarketFavoriteContext } from "./MarketFavoriteProvider";

export default ({ market }) => {
    const { addMarketFavorite } = useContext(MarketFavoriteContext)

    const handleClick = () => {
        window.location.href = market.url
    }

    return (
        <div className="marketCardContainer">
            <Card className="marketCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={market.logo} />
                <Card.Body>
                    <Card.Title>{market.name}</Card.Title>
                    <Card.Text>
                    Description: Button? 
                    </Card.Text>
                    <Button className="favoriteButton" variant="primary"
                    onClick={() => {
                        const marketFav = {
                            marketId: market.id,
                            activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
                          }
                        addMarketFavorite(marketFav)
                      }}
                    >Favorite</Button>
                    <Button className="favoriteButton visitButton" variant="primary" onClick={handleClick}>Visit</Button>
                </Card.Body>
            </Card>
        </div>
    );
};