import React, { useContext } from "react";
import Button from 'react-bootstrap/Button'
import { MessageContext } from "../message/MessageProvider";
import { FollowerContext } from "./FollowProvider";

export default ({ follow }) => {
    const { messages } = useContext(MessageContext)
    const { deleteFollow } = useContext(FollowerContext)

    //filter out messages from the user you're following
    const foundMessages = messages.filter(message => message.userId === follow.userId)

        return (
            <div className="followCard">
                <h5>{follow.user.username}</h5>
                {foundMessages.map(message => {
                    return (
                        <>
                            <div className="followerPost">
                                <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                                <div>{message.message}</div>
                            </div>
                        </>
                    )
                })}
                <Button type="button" className="btn btn-info messageFollowButton"
                    onClick={() => {
                        deleteFollow(follow.id)
                    }}
                >Unfollow {follow.user.username}</Button>
            </div>
        );
};