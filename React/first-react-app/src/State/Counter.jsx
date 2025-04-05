import { useState } from "react";
export default function Counter(){ 
    const [num, setCount] = useState(0);
    function handleSubmit(){
        setCount(num + 1);
    }
    return <>
        <p>The count is : {num}</p>
        <button onClick={handleSubmit}>Increment</button>
    </>
}