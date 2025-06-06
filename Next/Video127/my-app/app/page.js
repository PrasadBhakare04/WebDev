"use client"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return <>
      Signed In as {session.user.email}<br />
      <button onClick={() => { signOut() }}>SignOut</button>
      <img src="https://avatars.githubusercontent.com/u/153743967?v=4"/>
    </>
  }
  else {
    return <>
    Not signed In <br />
    <button onClick={() => { signIn("github") }}>SignIn</button>
    </>
  }
}
