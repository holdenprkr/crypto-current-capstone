import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'



export default ({ message, setMessage, editMode, toggle }) => {
    const { messages, addMessage, updateMessage } = useContext(MessageContext)


    const handleControlledInputChange = (event) => {
        const newMessage = Object.assign({}, message)
        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    const setDefaults = () => {
        if (editMode === true) {
            const messageId = message.id
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            setMessage(selectedMessage)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [message])

    const constructNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: message.id,
                userId: message.userId,
                message: message.message,
                timestamp: new Date(Date.now()).toLocaleDateString('en-US')
            })
        } else {
            addMessage({
                id: message.id,
                userId: message.userId,
                message: message.message,
                timestamp: new Date(Date.now()).toLocaleDateString('en-US')
            })
        }
    }

    return (
        <>
            <div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button type="button" className="btn btn-info publicMessageButton">Add A Public Message</Button>
            </div>
        </>
    )
}
