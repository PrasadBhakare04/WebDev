import { useState } from 'react';
import './Box.css';
function randomChoice (arr){
    const idx = Math.floor(Math.random()* arr.length);
    return arr[idx];
}
export default function ColorBox({colors}){
    const [color, setColor] = useState(randomChoice(colors));
    function changeColor(){
        setColor(randomChoice(colors));
    }
    return <div className='ColorBox' style={{backgroundColor : color}} onClick={changeColor}></div>
}