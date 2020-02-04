import React, { useRef } from "react"
import "./Login.css"

const Register = props => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            username: username.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("activeUser", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h2 className="h3 mb-3 font-weight-normal registerPrompt">Please Register for</h2>
                <h1 className="h3 mb-3 font-weight-normal registerTitle">Crypto Current</h1>
                <fieldset>
                    <label htmlFor="username" className="login--label"> Username </label>
                    <input ref={username} type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail" className="login--label"> Email address </label>
                    <input ref={email} type="email"
                        name="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword" className="login--label"> Password </label>
                    <input ref={password} type="password"
                        name="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword" className="login--label"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

export default Register