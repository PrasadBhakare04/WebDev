"use client"
export default function Home() {
  const data = { name : "Prasad", role : "Developer"};
  async function handleClick(){
    const req = await fetch('/api/add', {method : "POST", headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(data),
  })
  let res = await req.json();
  console.log(res)  
}
  return <>
  <button onClick={handleClick}>Click Me</button>
  <div>Handling API Requests</div>
  </>
}
