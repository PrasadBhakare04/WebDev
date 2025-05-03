import './App.css'
import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [data, setData] = useState([]);
      async function getData(){
          const d = await fetch('https://jsonplaceholder.typicode.com/posts');
          const dd = await d.json();
          setData(dd);
      }
      useEffect(() => {
          getData();
      }, [])
      return <>
      <Card items = {data}/>
      </>
}

export default App
