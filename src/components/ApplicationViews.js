import React from "react"
import CryptoDataProvider from "./crypto/CryptoDataProvider"
import CryptoList from "./crypto/CryptoList"
import { Route } from "react-router-dom"
import MessageProvider from "./message/MessageProvider"
import MessageList from "./message/MessageList"
import FollowerProvider from "./user/FollowProvider"
import FollowList from "./user/FollowList"
import UserProvider from "./user/UserProvider"
import CryptoProvider from "./crypto/CryptoProvider"
import MarketProvider from "./crypto/MarketProvider"
import CryptoPageList from "./crypto/cryptoPage/CryptoPageList"
import CryptoFavoriteProvider from "./crypto/cryptoPage/CryptoFavoriteProvider"
import MarketFavoriteProvider from "./crypto/cryptoPage/MarketFavoriteProvider"

export default (props) => {
    return (
        <>
            <CryptoDataProvider>
                <CryptoProvider>
                    <Route path="/home" render={
                        props => <CryptoList />
                    } />
                </CryptoProvider>
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

            <CryptoProvider>
                <MarketProvider>
                    <CryptoFavoriteProvider>
                        <MarketFavoriteProvider>
                            <Route exact path="/buy" render={
                               props => <CryptoPageList {...props} />
                            } />
                        </MarketFavoriteProvider>
                    </CryptoFavoriteProvider>
                </MarketProvider>
            </CryptoProvider>
        </>
    )
}