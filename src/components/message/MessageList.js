import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";
import Message from "./Message";
import "./Message.css";
import MessageForm from "./MessageForm";


export default (props) => {
    const { messages } = useContext(MessageContext)

    const inOrderMessages = messages.reverse()

    return (
        <>
            <div className="messageContainer">
                <MessageForm />
                <div className="messageBoard">
                    {inOrderMessages.map(message => {
                        return <Message key={message.id} message={message} />
                    })}
                </div>
            </div>
        </>
    )
}