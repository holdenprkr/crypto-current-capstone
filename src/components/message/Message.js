import React from "react";
import { Button } from 'reactstrap';


export default ({ message }) => {

    return (
        <>
            <div class="indivMessage">
                <h5>{message.user.username}</h5>
                <div>{message.timestamp}</div>
                <div>{message.message}</div> 
                <Button type="button" className="btn btn-info">Edit</Button>
                <Button type="button" className="btn btn-info">Delete</Button>
            </div>
        </>
    )
}
