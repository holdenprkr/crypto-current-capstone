import React, { useContext } from "react";
import { MarketContext } from "../MarketProvider";
import { CryptoContext } from "../CryptoProvider";
import Crypto from "./Crypto";
import Market from "./Market";
import "./CryptoPage.css"
import CryptoFavorite from "./CryptoFavorite";
import { CryptoFavoriteContext } from "./CryptoFavoriteProvider";
import { MarketFavoriteContext } from "./MarketFavoriteProvider";
import MarketFavorite from "./MarketFavorite";


export default () => {
    const { cryptos } = useContext(CryptoContext)
    const { markets } = useContext(MarketContext)
    const { cryptoFavorites } = useContext(CryptoFavoriteContext)
    const { marketFavorites } = useContext(MarketFavoriteContext)

  
    return (
      <div className="cryptoPage">
        <div className="cryptoList">
            <div className="watchlistContainer">
                <h2 className="watchlistHeader">Watchlist:</h2>
                {cryptoFavorites.map(cryptoFav => <CryptoFavorite key={cryptoFav.id} cryptoFav={cryptoFav} />)}
            </div>
            <div className="cryptosToWatch">
                <h2>Add cryptos you've got your eye on to your watchlist!</h2>
                {cryptos.map(crypto => <Crypto key={crypto.id} crypto={crypto} />)}
            </div>
        </div>
        <div className="cryptoMarkets">
            <div className="favoriteMarketContainer">
                <h2 className="favoriteMarketHeader">Your Favorite Markets:</h2>
                {marketFavorites.map(marketFav => <MarketFavorite key={marketFav.id} marketFav={marketFav} />)}
            </div>
            <div className="marketList">
                <h2>Check out these reccomended markets if you'd like to make an investment!</h2>
                {markets.map(market => <Market key={market.id} market={market} />)}
            </div>
        </div>
      </div>
    )
}