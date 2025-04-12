import Box from "./Box"
import './BoxGrid.css'
import { useState } from "react";
export default function BoxGrid(){
    const [arr ,setArr] = useState([false, false, false, true, true, false, false, false]);
    function toggleAll(){
        setArr(oldArr => {
            return oldArr.map(c => {
                return false;
            })
        })
    }

    function toggle(key){
        setArr (oldArr => {
            return oldArr.map((c, i) => {
                if(i === key) {
                    return !c;
                }
                else return c;
            })
        })
    }
    return <div className="BoxGrid">
        {
            arr.map((c,i) => {
                return <Box isActive={c} idx={i} func={toggle}/>
            })
        }
        <button onClick={toggleAll}>Reset All</button>
    </div>
}