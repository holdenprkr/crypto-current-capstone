import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";
import Message from "./Message";
import "./Message.css";
import MessageForm from "./MessageForm";


export default (props) => {
    const { messages, updateMessage } = useContext(MessageContext)
    const [ messageEditObj, setMessage ] = useState({})
    console.log(messageEditObj)

    const OrderMessages = messages.sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });

    return (
        <>
            <div className="messageContainer">
                <MessageForm messageToEdit={messageEditObj} />
                <div className="messageBoard">
                    {OrderMessages.map(message => {
                        return <Message key={message.id} message={message} setMessage={setMessage} {...props} />
                    })}
                </div>
            </div>
        </>
    )
}