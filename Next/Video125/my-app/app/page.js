import { submitAction } from "@/serverActions/submitAction";
export default function Home() {
  return <>
  <form action={submitAction}>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" style={{backgroundColor:"white", color:"black"}}/>
    </div>
    <div>
      <label htmlFor="add">Address</label>
      <input type="text" name="add" id="add" style={{backgroundColor:"white", color:"black"}}/>
    </div>
    <div>
      <button style={{border : "solid white 2px"}}>Submit</button>
    </div>
  </form>
  </>;
}
