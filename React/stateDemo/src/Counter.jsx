import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    return <>
        <p>Count : {count}</p>
        <button onClick={increment}>+3</button>
    </>
}