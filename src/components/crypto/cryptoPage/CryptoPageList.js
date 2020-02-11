import React, { useContext } from "react";
import { MarketContext } from "../MarketProvider";
import { CryptoContext } from "../CryptoProvider";
import Crypto from "./Crypto";
import Market from "./Market";
import "./CryptoPage.css"


export default () => {
    const { cryptos } = useContext(CryptoContext)
    const { markets } = useContext(MarketContext)
  
    return (
      <div className="cryptoPage">
        <div className="cryptoList">
            <h2>Add cryptos you've got your eye on to your watchlist!</h2>
            {cryptos.map(crypto => <Crypto key={crypto.id} crypto={crypto} />)}
        </div>
        <div className="cryptoMarkets">
            <h2>Check out these reccomended markets if you'd like to make an investment!</h2>
            {markets.map(market => <Market key={market.id} market={market} />)}
        </div>
      </div>
    )
}