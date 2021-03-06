import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { MarketFavoriteContext } from "./MarketFavoriteProvider";

export default ({ marketFav }) => {
    const { deleteMarketFavorite } = useContext(MarketFavoriteContext)

    //Opens window in new tab
    const handleClick = () => {
        window.open(marketFav.market.url, '_blank')
    }

    //Individual market card
    return (
        <div className="marketCardContainer">
            <Card className="marketCard" style={{ width: '11rem' }}>
                <Card.Img variant="top" className="cryptoImage" src={marketFav.market.logo} />
                <Card.Body>
                    <Card.Title>{marketFav.market.name}</Card.Title>
                    <Button className="favoriteButton" variant="primary"
                    onClick={() => {
                        deleteMarketFavorite(marketFav.id)
                    }}
                    >Remove</Button>
                    <Button className="favoriteButton visitButtonFavorited" variant="primary" onClick={handleClick}>Visit</Button>
                </Card.Body>
            </Card>
        </div>
    );
};