import { useEffect, useState } from "react"

export default function(){
    const [username, setUsername] = useState("")
    
    function changeUsername(e){
        setUsername(e.target.value);
    }
    return <>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={changeUsername} value={username}/>
    </>
}