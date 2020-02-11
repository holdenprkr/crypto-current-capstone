import React, { useState, useEffect } from "react"

export const CryptoContext = React.createContext()

const CryptoProvider = (props) => {
    const [cryptos, setCryptos] = useState([])

    const getCryptos = () => {
        return fetch("http://localhost:8088/cryptos")
            .then(res => res.json())
            .then(setCryptos)
    }

    useEffect(() => {
        getCryptos()
    }, [])

    return (
        <CryptoContext.Provider value={{
            cryptos
        }}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoProvider