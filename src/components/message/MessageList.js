import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Message from "./Message"
import "./Message.css"
// import MessageForm from "./MessageForm";


export default (props) => {
    const { messages } = useContext(MessageContext)

    return (
        <>
            <div className="messageContainer">
                <Button type="button" className="btn btn-info publicMessageButton">Add A Public Message</Button>
                <div className="messageBoard">
                    {messages.map(message => {
                        return <Message key={message.id} message={message} />
                    })}
                </div>
            </div>
        </>
    )
}