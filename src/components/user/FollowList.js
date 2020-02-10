import React, { useContext } from "react";
import Follow from "./Follow";
import "./Follow.css";
import { FollowerContext } from "./FollowProvider";


export default (props) => {
    const { followers } = useContext(FollowerContext)

    const usersImFollowing = followers.filter(following => following.activeUserId === parseInt(localStorage.getItem("activeUser"))) || []

    console.log("usersImFollowing", usersImFollowing)

    if (usersImFollowing.length < 1) {
        return (
            <>
                <div className="followContainer">
                    <h2 className="notFollowingPrompt">Oh no! It looks like you're not following anyone. Stay current with crypto by following users from the public message board on the home page.</h2>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h2>Keep up with recent posts from the people you follow!</h2>
                <div className="followContainer">
                    {usersImFollowing.map(follow => {
                       return <Follow key={follow.id} follow={follow} />
                    })}
                </div>
            </>
        )
    }
}