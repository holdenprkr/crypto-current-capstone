import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"
import Button from "react-bootstrap/Button"

const Login = props => {
    const email = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("activeUser", exists.id)
                    props.history.push("/home")
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value
                    })})
                        .then(_ => _.json())
                        .then(response => {
                            localStorage.setItem("activeUser", response.id)
                            props.history.push("/home")
                        })
                }})}
            
    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="cryptoCurrentLogin">Crypto Current</h1>
                    <h2 className="signInLogin">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail" className="login--label"> Email address </label>
                        <input ref={email} type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword" className="login--label"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <Button className="btn btn-info signInButton" type="submit">
                            Sign in
                    </Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
} 

export default Login