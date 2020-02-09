import React, { useContext, useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default (props) => {
    const { messages, addMessage, updateMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})

    const editMode = props.match.params.hasOwnProperty("messageId")

    const handleControlledInputChange = (event) => {
        const newMessage = Object.assign({}, message)
        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    
    const setDefaults = () => {
        if (editMode) {
            const messageId = parseInt(props.match.params.messageId)
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            setMessage(selectedMessage)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [messages])

    const constructNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: message.id,
                userId: parseInt(localStorage.getItem("activeUser")),
                message: message.messageArea,
                timestamp: Date.now()
            })
                .then(() => props.history.push("/"))
        } else {
            addMessage({
                    userId: parseInt(localStorage.getItem("activeUser")),
                    message: message.messageArea,
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
                        value={message.message}  
                        onChange={handleControlledInputChange}/>
                </Form.Group>
                <Button type="button" className="btn btn-info publicMessageButton" onClick={constructNewMessage}>Add A Public Message</Button>
            </div>
        </>
    )
}


    // const setDefaults = () => {
    //     if (editMode === true) {
    //         const messageId = message.id
    //         const selectedMessage = messages.find(m => m.id === messageId) || {}
    //         setMessage(selectedMessage)
    //     }
    // }

    // useEffect(() => {
    //     setDefaults()
    // }, [message])



//         if (editMode) {
//             updateMessage({
//                 id: message.id,
//                 userId: message.userId,
//                 message: message.message,
//                 timestamp: new Date(Date.now()).toLocaleDateString('en-US')
//             })
//         } else  