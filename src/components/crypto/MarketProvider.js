import React, { useState, useEffect } from "react"

export const MarketContext = React.createContext()

const MarketProvider = (props) => {
    const [markets, setMarkets] = useState([])

    const getMarkets = () => {
        return fetch("http://localhost:8088/markets")
            .then(res => res.json())
            .then(setMarkets)
    }

    const addMarket = market => {
        return fetch("http://localhost:8088/markets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(market)
        })
            .then(getMarkets)
    }

    const deleteMarket = marketId => {
        return fetch(`http://localhost:8088/markets/${marketId}`, {
            method: "DELETE"
        })
            .then(getMarkets)
    }

    const updateMarket = market => {
        return fetch(`http://localhost:8088/markets/${market.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(market)
        })
            .then(getMarkets)
    }

    useEffect(() => {
        getMarkets()
    }, [])

    return (
        <MarketContext.Provider value={{
            markets, addMarket, deleteMarket, updateMarket
        }}>
            {props.children}
        </MarketContext.Provider>
    )
}

export default MarketProvider