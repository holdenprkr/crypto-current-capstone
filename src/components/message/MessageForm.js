import React, { useContext, useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default (props) => {
    const { messages, addMessage, updateMessage } = useContext(MessageContext)
    const [message, setMessage] = useState("")
    const [messageObj, setMessageObj] = useState({})

    const editMode = props.match.params.hasOwnProperty("messageId")

    const handleControlledInputChange = (event) => {
        
        setMessage(event.target.value)
    }

    
    const setDefaults = () => {
        if (editMode) {
            const messageId = parseInt(props.match.params.messageId)
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            setMessage(selectedMessage.message)
            setMessageObj(selectedMessage)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [messages])

    const constructNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: messageObj.id,
                userId: parseInt(localStorage.getItem("activeUser")),
                message: message,
                timestamp: messageObj.timestamp
            })
                .then(() => props.history.push("/home"))
        } else {
            addMessage({
                    userId: parseInt(localStorage.getItem("activeUser")),
                    message: message,
                    timestamp: Date.now()
                })
            }
        }

    return (
        <>
            <div className="messageInputArea">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        name="messageArea" 
                        rows="3"
                        placeholder="Post your research or see what others are saying down below!"
                        value={message}
                        onChange={handleControlledInputChange}/>
                </Form.Group>
                <Button 
                    type="button" 
                    className="btn btn-info publicMessageButton" 
                    onClick={() => {
                        constructNewMessage()
                        setMessage("")
                    }}
                    >{editMode ? "Edit Your Public Message" : "Add A Public Message"}</Button>
            </div>
        </>
    )
}