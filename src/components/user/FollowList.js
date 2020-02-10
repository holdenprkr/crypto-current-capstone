import React, { useContext } from "react";
import Follow from "./Follow";
import "./Follow.css";
import { FollowerContext } from "./FollowProvider";


export default (props) => {
    const { followers } = useContext(FollowerContext)

    const UsersImFollowing = followers.filter(following => following.activeUserId === parseInt(localStorage.getItem("activeUser")))

    console.log(UsersImFollowing)

    return (
        <>
            <h2>Keep up with recent posts from the people you follow!</h2>
            <div className="followContainer">
                {UsersImFollowing.map(follow => {
                   return <Follow key={follow.id} follow={follow} />
                })}
            </div>
        </>
    )
}