import Dice from "./Dice";
import { Roll, Sum } from "./utils";
import { useState } from "react";
import Button from "./Button";
export default function Game(){
    const [arr, setArr] = useState(Roll());
    function Change(){
        setArr(Roll())
    }
    const isWinner = Sum(arr) === 7;
    return<>
    <h1>Welcome to Lucky7 Game</h1>
    {isWinner ? <h1>You Won</h1> : <p>You Lost</p>}
        <Dice arr={arr}/>
        {/* <button onClick={Change}>Roll Dice</button> */}
        <Button func={Change}/>
    </>
}