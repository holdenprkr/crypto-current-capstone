import React, { useContext } from "react";
import Button from 'react-bootstrap/Button'
import { MessageContext } from "./MessageProvider";
import { FollowerContext } from "../user/FollowProvider";
 
export default ({ message, history, handleClick }) => {
    const { deleteMessage } = useContext(MessageContext)
    const { newFollow, followers, deleteFollow } = useContext(FollowerContext)

    //Checks if message that's being passed in is posted by someone I'm following
    const UsersImFollowing = followers.filter(following => following.activeUserId === parseInt(localStorage.getItem("activeUser")))
    const FoundFollow = UsersImFollowing.find(user => user.userId === message.userId)

    // Display each message depending on if it's yours, someone you follow, or someone you don't follow
    if (message.userId === parseInt(localStorage.getItem("activeUser"))) {
        return (
            <>
                <div className="indivMessage">
                    <h5 className="messageUsername">{message.user.username}</h5>
                    <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                    <div>{message.message}</div> 
                    <Button type="button" className="btn btn-info messageEditButton"
                    onClick={() => {
                        history.push(`/home/${message.id}`,
                        handleClick())
                        }}
                    >Edit</Button>
                    <Button type="button" className="messageDeleteButton" variant="outline-danger"
                        onClick={() => {
                            deleteMessage(message.id)
                        }}
                    >Delete</Button>
                </div>
            </>
        )
    } else if (FoundFollow) {
        return (
        <>
            <div className="indivMessage">
                <h5 className="messageUsername">{message.user.username}</h5>
                <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                <div>{message.message}</div> 
                <Button type="button" className="btn btn-info messageFollowButton"
                onClick={() => {
                    deleteFollow(FoundFollow.id)
                  }}
                >Unfollow {message.user.username}</Button>
            </div>
        </>
        )
    } else {
        return (
            <>
                <div className="indivMessage">
                    <h5 className="messageUsername">{message.user.username}</h5>
                    <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                    <div>{message.message}</div> 
                    <Button type="button" className="btn btn-info messageFollowButton"
                    onClick={() => {
                        const follow = {
                            userId: message.userId,
                            activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
                          }
                        newFollow(follow)
                      }}
                    >Follow {message.user.username}</Button>
                </div>
            </>
        )
    }
    
}
