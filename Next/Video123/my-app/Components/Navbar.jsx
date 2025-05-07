import Link from "next/link"
export default function Navbar(){
    return <nav>
        <Link href="/" style={{padding : "0 20px 0 0"}}>Home</Link>
        <Link href={"/about"}>About</Link>
    </nav>
}