import React, { useContext, useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default (props) => {
    const { messages, addMessage, updateMessage } = useContext(MessageContext)
    //Message string state
    const [message, setMessage] = useState("")
    //Message object state
    const [messageObj, setMessageObj] = useState({})

    //Check if editting by check for messageId digit variable set in application views 
    const editMode = props.match.params.hasOwnProperty("messageId")

    //Sets message string state equal to text input
    const handleControlledInputChange = (event) => {  
        setMessage(event.target.value)
    }

    
    const setDefaults = () => {
        if (editMode) {
            const messageId = parseInt(props.match.params.messageId)
            //finds message you're editting
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            //sets message string state to the message you've chosen to edit
            setMessage(selectedMessage.message)
            //sets message object state to the message object you've chosen to edit
            setMessageObj(selectedMessage)
        }
    }

    //When messages' state changes run setDefaults function
    useEffect(() => {
        setDefaults()
    }, [messages])

    //depending on if you're in "edit mode" or not create or update message object
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