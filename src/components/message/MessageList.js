import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";
import Message from "./Message";
import "./Message.css";
import MessageForm from "./MessageForm";


export default (props) => {
    const { messages } = useContext(MessageContext)

    const OrderMessages = messages.sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });

    return (
        <>
            <div className="messageContainer">
                <MessageForm {...props}/>
                <div className="messageBoard">
                    {OrderMessages.map(message => {
                        return <Message key={message.id} message={message} history={props.history} />
                    })}
                </div>
            </div>
        </>
    )
}