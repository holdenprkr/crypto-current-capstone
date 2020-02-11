import React, { useState, useEffect } from "react"

export const MarketFavoriteContext = React.createContext()

const MarketFavoriteProvider = (props) => {
    const [marketFavorites, setMarketFavorites] = useState([])

    const getMarketFavorites = () => {
        return fetch("http://localhost:8088/favoriteMarkets?_expand=market")
            .then(res => res.json())
            .then(setMarketFavorites)
    }

    const addMarketFavorite = marketFavorite => {
        return fetch("http://localhost:8088/favoriteMarkets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(marketFavorite)
        })
            .then(getMarketFavorites)
    }

    const deleteMarketFavorite = marketFavoriteId => {
        return fetch(`http://localhost:8088/favoriteMarkets/${marketFavoriteId}`, {
            method: "DELETE"
        })
            .then(getMarketFavorites)
    }

    useEffect(() => {
        getMarketFavorites()
    }, [])

    return (
        <MarketFavoriteContext.Provider value={{
            marketFavorites, addMarketFavorite, deleteMarketFavorite
        }}>
            {props.children}
        </MarketFavoriteContext.Provider>
    )
}

export default MarketFavoriteProvider