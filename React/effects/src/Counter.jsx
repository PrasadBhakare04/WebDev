import { useState, useEffect } from "react"

export default function Counter(){
    const [count, setCount] = useState(1);
    function increment(){
        setCount(c => {
            return c + 1
        })
    }

    useEffect(function myEffect() {
        console.log("my effect was called")
    })
    return <>
        <h1>{count}</h1>
        <button onClick={increment}>+1</button>
    </>
}