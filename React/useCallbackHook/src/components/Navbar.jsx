import { memo } from "react"
export default memo (function Navbar({adjective, func}){
    console.log("Navbar rendered")
    return <> 
    <div>I am a {adjective} navbar</div>
    <button onClick={()=> {
        func();
    }}>Change</button>
    </>
})