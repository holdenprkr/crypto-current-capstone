import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { MarketFavoriteContext } from "./MarketFavoriteProvider";

export default ({ market }) => {
    const { marketFavorites, addMarketFavorite } = useContext(MarketFavoriteContext)

    //Opens window in new tab
    const handleClick = () => {
        window.open(market.url, '_blank')
    }

    //checks if market is in your favorites
    const foundFavorites = marketFavorites.filter(favs => favs.activeUserId === parseInt(localStorage.getItem("activeUser")))
    const foundMarket = foundFavorites.find(fav => fav.marketId === market.id) || {}


    //Individual market card, don't display if favorited
    if (foundMarket.marketId === market.id) {
        return null
    } else {
        return (
            <div className="marketCardContainer">
                <Card className="marketCard" style={{ width: '14rem' }}>
                    <Card.Img variant="top" className="cryptoImage" src={market.logo} />
                    <Card.Body>
                        <Card.Title>{market.name}</Card.Title>
                        <Card.Text>
                        {market.description}
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
    }
};