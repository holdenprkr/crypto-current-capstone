import React, { useState, useEffect } from "react"

export const CryptoFavoriteContext = React.createContext()

const CryptoFavoriteProvider = (props) => {
    const [cryptoFavorites, setCryptoFavorites] = useState([])

    const getCryptoFavorites = () => {
        return fetch("http://localhost:8088/favoriteCryptos?_expand=crypto")
            .then(res => res.json())
            .then(setCryptoFavorites)
    }

    const addCryptoFavorite = cryptoFavorite => {
        return fetch("http://localhost:8088/favoriteCryptos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cryptoFavorite)
        })
            .then(getCryptoFavorites)
    }

    const deleteCryptoFavorite = cryptoFavoriteId => {
        return fetch(`http://localhost:8088/favoriteCryptos/${cryptoFavoriteId}`, {
            method: "DELETE"
        })
            .then(getCryptoFavorites)
    }

    useEffect(() => {
        getCryptoFavorites()
    }, [])

    return (
        <CryptoFavoriteContext.Provider value={{
            cryptoFavorites, addCryptoFavorite, deleteCryptoFavorite
        }}>
            {props.children}
        </CryptoFavoriteContext.Provider>
    )
}

export default CryptoFavoriteProvider