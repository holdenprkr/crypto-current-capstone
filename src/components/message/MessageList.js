import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";
import Message from "./Message";
import "./Message.css";
import MessageForm from "./MessageForm";
import { UserContext } from "../user/UserProvider";

export default (props) => {
    const { messages } = useContext(MessageContext)
    const { users } =  useContext(UserContext)

    const activeUserObj = users.find(user => user.id === parseInt(localStorage.getItem("activeUser"))) || {}
    console.log(activeUserObj)

    const OrderMessages = messages.sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });

      const messageFormRef = React.createRef();
      const handleClick = () =>
        messageFormRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

    return (
        <>
            <div className="messageContainer">
                <div className="messagePrompt">
                    <h4 ref={messageFormRef}>Welcome to the public message board {activeUserObj.username}!</h4>
                </div>
                <MessageForm {...props} messageFormRef={messageFormRef}/>
                <div className="messageBoard">
                    {OrderMessages.map(message => {
                        return <Message key={message.id} message={message} history={props.history} handleClick={handleClick}/>
                    })}
                </div>
            </div>
        </>
    )
}