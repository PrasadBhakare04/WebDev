import { useState } from "react";
export default function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score : 0, p2Score : 0});
    
    function increaseP1Score(){
        setScores(oldScore => {
            return {...oldScore, p1Score : oldScore.p1Score + 1}
        })
    }

    function increaseP2Score(){
        setScores(oldScore => {
            return {...oldScore, p2Score : oldScore.p2Score + 1}
        })
    }
    return (
        <div>
            <p>Player 1 : {scores.p1Score}</p>
            <p>Player 2 : {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+Player 1</button>
            <button onClick={increaseP2Score}>+Player 2</button>
        </div>
    )
}