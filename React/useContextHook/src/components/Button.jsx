import { useContext } from "react"
import { counterContext } from "../context/counterContext"
export default function Button(){
    const value = useContext(counterContext);
    return <button onClick={()=>{
        value.setCount(count => {
            return count + 1;
        });
    }}>Click me to change the count {value.count}</button>
}