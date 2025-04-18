import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import {v4 as uuid} from 'uuid';
import {io} from 'socket.io-client';


function App() {
  const [data, setData] = useState([]);
  // async function getData(){
  //   const response = await fetch('http://localhost:3000/');
  //   const arr = await response.json();
  //   setData(arr)
  // }

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('sentData', (data) => {
      setData(data);
    })
    socket.on("addedUser", (data) => {
      setData(oldData => {
        return [...oldData, data]
      })
    })
    socket.emit()

    return () => {
      socket.disconnect();
    }
  }, [])


  return (
    <>
      {data.map(u => {
        return <h1 key={uuid()}>{u.name} - {u.phone}</h1>
      })}
    </>
  )
}

export default App
