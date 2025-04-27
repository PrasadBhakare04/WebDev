import { NavLink } from "react-router-dom"

export default function Navbar(){
    const rand = Math.floor((Math.random() * 6)).toString()
    return <nav>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to={`/About/${rand}`}>About</NavLink></li>
    </nav>
}