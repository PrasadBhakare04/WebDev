import { useState } from "react"

export default function Form(){
    const [username, setUsername] = useState("");
    function changeUsername(evt){
        setUsername(evt.target.value);
    }
    return <>
    <label htmlFor="username">Enter username</label>
        <input type="text" placeholder = "Enter your username" value={username} onChange={changeUsername} id="username"/>
        <span style={{display: "block"}}>{username}</span>
        <button>Submit</button>
    </>
}