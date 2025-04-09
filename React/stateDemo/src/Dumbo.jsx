import { useState } from "react";

function generateGameBoard(){
    console.log("Making the initial game board");
    return Array(5000);
}
export default function Dumbo(){
    return <button onClick={() => setBoard("hello")}>Click me to change state</button>
}
