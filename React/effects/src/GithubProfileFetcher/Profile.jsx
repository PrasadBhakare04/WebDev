import { useEffect, useState } from "react"
export default function Profile({search}){
    const [term, setTerm] = useState("");
    function handleChange(e){
        setTerm(e.target.value)
    }
    function handleClick(){
        search(term)
        setTerm("")
    }
    return<>
    <input type="text" value={term} id="username" placeholder="username" onChange={handleChange}/>
    <button onClick={handleClick}>Submit</button>
    </>
}