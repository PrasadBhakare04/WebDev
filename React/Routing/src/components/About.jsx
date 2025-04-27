import { useParams } from "react-router-dom"
export default function About(){
    const params = useParams();
    return <h1>The name of the user is {params.username}</h1>
}