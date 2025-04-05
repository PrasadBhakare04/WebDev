import { useState } from "react"
export default function ScoreKeeper({num}){
    const arena = [];
    for(let i = 1; i <= num; i++){
        arena.push({name : i, score : 0, isWinner : false})
    }
    
    const [players, setPlayer] = useState(arena);

    function increaseScore(i){
        setPlayer(oldPlayers => {
            return oldPlayers.map((e, idx) => {
                if(e.score === 9){
                    return {
                        ...e,
                        score : e.score + 1,
                        isWinner : true
                    }
               }
                if(idx === i){
                    return {
                        ...e,
                        score : e.score + 1
                    }
                }  
                else {
                    return e
                }
            })
        })
    }

    // function checkWinner(){
    //     players.map(e => {
    //         if(e.score === 10){
    //             return {
    //                 ...e,
    //                 isWinner : true
    //             }
    //         }
    //     })
    // }

    function decreaseScore(i){
        setPlayer(oldPlayers => {
            return oldPlayers.map((e, idx) => {
                if(idx === i){
                    return {
                        ...e,
                        score : e.score - 1
                    }
                }  
                else {
                    return e
                }
            })
        })
    }

    function reset(){
        setPlayer(oldPlayers => {
            return oldPlayers.map(e => {
                return {
                    ...e,
                    score : 0,
                    isWinner : false
                }
            })
        })
    }
    return <>
    <ul>
        {players.map((e, i) => {
            return <li key={i}>Player {e.name} : Score : {e.score} {e.isWinner? <span>Winner</span> : null}<button onClick = {() => {
                increaseScore(i);
            }}>+</button><button onClick = {() => {
                decreaseScore(i);
            }}>-</button></li>
        })}
    </ul>
    <button onClick={reset}>Reset</button>
    </>
}