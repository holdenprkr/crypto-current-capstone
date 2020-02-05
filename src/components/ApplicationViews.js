import React from "react"
import CryptoProvider from "./crypto/CryptoProvider"
import CryptoList from "./crypto/CryptoList"
import { Route } from "react-router-dom"

export default (props) => {
    return (
        <>
            <CryptoProvider>
                <Route exact path="/" render={
                    props => <CryptoList />
                } />  
            </CryptoProvider>
        </>
    )
}