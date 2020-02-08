import React, { useContext, useState } from "react"
import { MessageContext } from "./MessageProvider"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default () => {
    const { addMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})

    const handleControlledInputChange = (event) => {
        const newMessage = Object.assign({}, message)
        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    const constructNewMessage = () => 
        {
            addMessage({
                userId: parseInt(localStorage.getItem("activeUser")),
                message: message.message,
                timestamp: new Date(Date.now()).toLocaleDateString('en-US')
            })
        }

    return (
        <>
            <div className="messageInputArea">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name="message" rows="3" onChange={handleControlledInputChange}/>
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