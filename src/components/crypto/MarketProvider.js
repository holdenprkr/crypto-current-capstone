import React, { useState, useEffect } from "react"

export const MarketContext = React.createContext()

const MarketProvider = (props) => {
    const [markets, setMarkets] = useState([])

    const getMarkets = () => {
        return fetch("http://localhost:8088/markets")
            .then(res => res.json())
            .then(setMarkets)
    }

    useEffect(() => {
        getMarkets()
    }, [])

    return (
        <MarketContext.Provider value={{
            markets
        }}>
            {props.children}
        </MarketContext.Provider>
    )
}

export default MarketProvider