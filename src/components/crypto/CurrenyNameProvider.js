import React, { useState, useEffect } from "react"

export const CurrencyNameContext = React.createContext()

const CurrencyNameProvider = (props) => {
    const [currencyNames, setCurrencyNames] = useState([])

    const getCurrencyNames = () => {
        return fetch("http://localhost:8088/currencies")
            .then(res => res.json())
            .then(setCurrencyNames)
    }
    
    useEffect(() => {
        getCurrencyNames()
    }, [])

    return (
        
        <CurrencyNameContext.Provider value={{
            currencyNames
        }}>
            
            {props.children}
        </CurrencyNameContext.Provider>
    )
   
}

export default CurrencyNameProvider
