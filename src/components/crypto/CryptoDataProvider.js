import React, { useState, useEffect } from "react"

export const CryptoDataContext = React.createContext()

const CryptoDataProvider = (props) => {
    const [cryptosData, setCryptosData] = useState([])

    const getCryptosData = (coin) => {
        return fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coin}&market=USD&apikey=${process.env.REACT_APP_API_KEY}}`)
            .then(res => res.json())
            .then(setCryptosData)
    }
   
    useEffect(() => {
        getCryptosData("BTC")
    }, [])

    return (
        
        <CryptoDataContext.Provider value={{
            cryptosData, getCryptosData
        }}>
            
            {props.children}
        </CryptoDataContext.Provider>
    )
   
}

export default CryptoDataProvider