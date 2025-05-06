import { useNavigate } from "react-router-dom"
export default function About(){
    const navigate = useNavigate();
    return <>
    <div>About page</div>
    <button onClick={() => {
        navigate('/')
    }}>Home</button>
    </>
    
}