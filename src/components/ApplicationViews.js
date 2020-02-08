import React from "react"
import CryptoDataProvider from "./crypto/CryptoDataProvider"
import CryptoList from "./crypto/CryptoList"
import { Route } from "react-router-dom"
import CryptoNameProvider from "./crypto/CryptoNameProvider"
import MessageProvider from "./message/MessageProvider"
import MessageList from "./message/MessageList"

export default (props) => {
    return (
        <>
            <CryptoDataProvider>
                <CryptoNameProvider>
                    <Route exact path="/" render={
                        props => <CryptoList />
                    } />
                </CryptoNameProvider>
            </CryptoDataProvider>

            <MessageProvider>
                <Route exact path="/" render={
                    props => <MessageList {...props} />
                } />
            </MessageProvider>
        </>
    )
}