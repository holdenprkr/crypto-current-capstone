import React, { useState, useEffect } from "react"

export const FollowerContext = React.createContext()

const FollowerProvider = (props) => {
    const [followers, setFollowers] = useState([])

    const getFollowers = () => {
        return fetch("http://localhost:8088/followers")
            .then(res => res.json())
            .then(setFollowers)
    }

    const newFollow = follow => {
        return fetch("http://localhost:8088/followers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(follow)
        })
            .then(getFollowers)
    }

    const deleteFollow = followerId => {
        return fetch(`http://localhost:8088/followers/${followerId}`, {
            method: "DELETE"
        })
            .then(getFollowers)
    }

    useEffect(() => {
        getFollowers()
    }, [])

    return (
        <FollowerContext.Provider value={{
            followers, newFollow, deleteFollow
        }}>
            {props.children}
        </FollowerContext.Provider>
    )
}

export default FollowerProvider