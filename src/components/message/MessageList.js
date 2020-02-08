import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";
import Message from "./Message";
import "./Message.css";
import MessageForm from "./MessageForm";


export default (props) => {
    const { messages } = useContext(MessageContext)

    return (
        <>
            <div className="messageContainer">
                <MessageForm />
                <div className="messageBoard">
                    {messages.map(message => {
                        return <Message key={message.id} message={message} />
                    })}
                </div>
            </div>
        </>
    )
}