import { useState, useEffect } from 'react'
import {io} from 'socket.io-client'
const socket = io('http://localhost:3000/');
export default function Chat(){
    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState("");
    const [input, setInput] = useState("");
  
    socket.on('history', (data)=>{
      setMessageList(data)
    })
  
  
    useEffect(() => {
      setMessageList(oldList => {
        return [...oldList, {text : message}];
      })
    }, [message])
  
    socket.on('receiveMessage', (data) => {
      setMessage(data);
    })
    function updateMessage(e){
      setInput(e.target.value);
    }
    function sendMessage(e){
      setMessage(message)
      setInput("")
      socket.emit('sendMessage', {msg : `${socket.id}  -  ${input}`})
    }
    return (
      <>
       <h1>Chat App</h1>
       <input type="text" value={input} onChange={updateMessage}/>
      <button onClick={sendMessage}>Submit</button>
      {
        messageList.map((m,i) => {
            return <li style={{listStyleType : "none"}}>{m.text}</li>
        })
      }
      </>
    )
}