import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Homepage = ({  onLogout }) => {


    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [cookie, setCookie, removeCookie] = useCookies(["data"]);

    const [searchResult, setSearchResult] = useState("");
    const navigate = useNavigate();

    function handleInput1(e) {
        setInput1(e.target.value);
    }

    function handleInput2(e) {
        setInput2(e.target.value);
    }

    function handleSubmitData() {
        const updatedInputs = [...(cookie.data || []), input1];
        setCookie("data", updatedInputs);
        alert("data is saved in cookie");
    }

    function handleSearchData() {
        if (!input2) {
            setSearchResult("");
            return;
        }

        const matchingInputs = (cookie.data || []).filter((message) =>
            message.includes(input2)
        );
        setSearchResult(matchingInputs.join(", "));
        alert("Search Data:" + matchingInputs.join(", "));
    }

    function handleClearCookie() {
        removeCookie("data", []);
        alert("cookie is removed");
    }

    function handleLogout() {
        alert("Logged out!");
        onLogout();
        navigate("/");
    }

    return (
        <div className="form">
            <h2>Home Page</h2>
            <div className="login">
                <h5>Submit text message</h5>
                <input type="text" value={input1} onChange={handleInput1} />
            </div>
            <br />
            <div>
                <button onClick={handleSubmitData}>Submit</button>
            </div>
            <div className="login">
                <h5>Search text message</h5>
                <input type="text" value={input2} onChange={handleInput2} />
            </div>
            <br />
            <div className="login">
                <button onClick={handleSearchData}>Search</button>
            </div>
            <br />
            <div className="login">
                <textarea cols={40} rows={8} value={searchResult} readOnly />
            </div>
            <br />
            <div>
                <button onClick={handleClearCookie}>Clear All</button>
                <button onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    );
};