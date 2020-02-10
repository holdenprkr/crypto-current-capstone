import React from "react"
import CryptoDataProvider from "./crypto/CryptoDataProvider"
import CryptoList from "./crypto/CryptoList"
import { Route } from "react-router-dom"
import CryptoNameProvider from "./crypto/CryptoNameProvider"
import MessageProvider from "./message/MessageProvider"
import MessageList from "./message/MessageList"
import FollowerProvider from "./user/FollowProvider"
import FollowList from "./user/FollowList"
import UserProvider from "./user/UserProvider"

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
                    <UserProvider>
                        <Route exact path="/home" render={
                            props => <MessageList {...props} />
                        } />
                        <Route exact path="/home/:messageId(\d+)" render={
                            props => <MessageList {...props} />
                        } />
                        <Route exact path="/following" render={
                            props => <FollowList {...props} />
                        } />
                    </UserProvider>
                </FollowerProvider>
            </MessageProvider>
        </>
    )
}