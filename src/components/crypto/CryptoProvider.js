import React, { useState, useEffect } from "react"
import key from "../../Key"
// import {withRouter} from "react-router-dom"

export const CryptoContext = React.createContext()

const CryptoProvider = (props) => {
    const [cryptos, setCryptos] = useState([])

    const getCryptos = () => {
        return fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${key.alphaVantageKey}`)
            .then(res => res.json())
            .then(setCryptos)
    }
    console.table(cryptos)
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

// withRouter(CryptoProvider)