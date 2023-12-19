import React, { useState } from "react";
import usersData from "../userData.json";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Login = ({ onLoginSuccess }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const user = usersData.find((user) => user.email_id === email);
        if (user && user.password === password) {
            alert("login successful");
            console.log("login successful");
            onLoginSuccess();
            navigate("/homepage");
        } else {
            alert("invalid email or password");
        }
    }

    return (
        <div className="form">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="login">
                    <h5>Login</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};