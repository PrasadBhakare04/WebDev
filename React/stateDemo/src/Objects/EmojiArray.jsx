import { useState } from "react";
import {v4 as uuid} from "uuid";
export default function EmojiArray(){
    const [emoji, setEmoji] = useState([{id : uuid(), emoji : "😀"}]);
    function addEmoji(){
        setEmoji(oldArr => {
            return [...oldArr, {id : uuid(), emoji : "😀"}]
        })
    }
    
    function changeEmoji(){
        return setEmoji(oldArr => {
            return oldArr.map(e => {
                return {
                    ...e,
                    emoji : "❤"
                }
            })        
        })
    }
    return <>
        {emoji.map(e => 
            <span onClick={() => {
                    deleteEmoji(e.id);
                }
            } key={e.id} style={{fontSize : "4rem"}}>{e.emoji}</span>
        )}
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={changeEmoji}>Change Emoji</button>
    </> 
}