import React, { useState, useEffect } from "react"

export const CryptoContext = React.createContext()

const CryptoProvider = (props) => {
    const [cryptos, setCryptos] = useState([])

    const getCryptos = () => {
        return fetch("http://localhost:8088/cryptos")
            .then(res => res.json())
            .then(setCryptos)
    }

    const addCrypto = crypto => {
        return fetch("http://localhost:8088/cryptos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(crypto)
        })
            .then(getCryptos)
    }

    const deleteCrypto = cryptoId => {
        return fetch(`http://localhost:8088/cryptos/${cryptoId}`, {
            method: "DELETE"
        })
            .then(getCryptos)
    }

    const updateCrypto = crypto => {
        return fetch(`http://localhost:8088/Cryptos/${crypto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(crypto)
        })
            .then(getCryptos)
    }

    useEffect(() => {
        getCryptos()
    }, [])

    return (
        <CryptoContext.Provider value={{
            cryptos, addCrypto, deleteCrypto, updateCrypto
        }}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoProvider