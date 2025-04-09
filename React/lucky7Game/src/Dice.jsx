import Die from "./Die";
import './Dice.css'
export default function Dice({arr}){
    return <>
    <span className="Dice">
    {arr.map((i,e) => {
        return <Die key={e} val={i}/>
    })}
    </span>   
    </>
}