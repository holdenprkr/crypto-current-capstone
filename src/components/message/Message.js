import React, { useContext } from "react";
import Button from 'react-bootstrap/Button'
import { MessageContext } from "./MessageProvider";


export default ({ message, setMessage }) => {
    const { deleteMessage } = useContext(MessageContext)
    
    if (message.userId === parseInt(localStorage.getItem("activeUser"))) {
        return (
            <>
                <div className="indivMessage">
                    <h5 className="messageUsername">{message.user.username}</h5>
                    <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                    <div>{message.message}</div> 
                    <Button type="button" className="btn btn-info messageEditButton"
                        onClick={() => {
                            setMessage(message)
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
    } else {
        return (
            <>
                <div className="indivMessage">
                    <h5 className="messageUsername">{message.user.username}</h5>
                    <div>{new Date(message.timestamp).toLocaleDateString('en-us')}</div>
                    <div>{message.message}</div> 
                    <Button type="button" className="btn btn-info messageFollowButton">Follow {message.user.username}</Button>
                </div>
            </>
        )
    }
    
}
