import React, { useState, useEffect } from "react"

export const CryptoNameContext = React.createContext()

const CryptoNameProvider = (props) => {
    const [cryptoNames, setCryptoNames] = useState([])

    const getCryptoNames = () => {
        return fetch("http://localhost:8088/cryptos")
            .then(res => res.json())
            .then(setCryptoNames)
    }
    
    useEffect(() => {
        getCryptoNames()
    }, [])

    return (
        
        <CryptoNameContext.Provider value={{
            cryptoNames
        }}>
            
            {props.children}
        </CryptoNameContext.Provider>
    )
   
}

export default CryptoNameProvider