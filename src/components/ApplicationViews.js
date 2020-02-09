import React from "react"
import CryptoDataProvider from "./crypto/CryptoDataProvider"
import CryptoList from "./crypto/CryptoList"
import { Route } from "react-router-dom"
import CryptoNameProvider from "./crypto/CryptoNameProvider"
import MessageProvider from "./message/MessageProvider"
import MessageList from "./message/MessageList"
import FollowerProvider from "./user/FollowProvider"

export default (props) => {
    return (
        <>
            <CryptoDataProvider>
                <CryptoNameProvider>
                    <Route path="/home" render={
                        props => <CryptoList />
                    } />
                </CryptoNameProvider>
            </CryptoDataProvider>

            <MessageProvider>
                <FollowerProvider>
                    <Route path="/home" render={
                        props => <MessageList {...props} />
                    } />
                </FollowerProvider>
            </MessageProvider>
        </>
    )
}