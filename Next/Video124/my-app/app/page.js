"use client"

import { useState } from "react";

export default function Home() {
  const [res, setRes] = useState();
  const data = { name : "Prasad", role : "Developer"};
  async function handleClick(){
    const req = await fetch('/api/add', {method : "POST", headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(data),
  })
  let response = await req.json();
  setRes(response);
  console.log(res)
}
  return <>
  
  <button onClick={handleClick}>Click Me</button>
  <div>Handling API Requests</div>
  {res ? <div>{res.message}-{res.data.name}-{res.data.role}</div> : null}
  </>
}
