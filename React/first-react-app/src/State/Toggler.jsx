import { useState } from "react";
import "./Toggler.css"
export default function Toggler(){
    const[toggle, setToggle] = useState(true);
    const handleToggle = () => {setToggle(!toggle)};
    const[num, setNum] = useState(0);
    const incrementCount = () => setNum(num+=1);
    return <>
        {toggle ? <p>😊</p> : <p>😡</p>}
        <p>{num}</p>
        <button onClick={() => {
            handleToggle();
            incrementCount()
        }}>Click To Change</button>
    </>
}