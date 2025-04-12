import {useState} from 'react';
import { useEffect } from 'react';
import Profile from './Profile';
import axios from 'axios'
export default function MainPage(){
    const [data, setData] = useState({username : "prasad", image : "https://avatars.githubusercontent.com/u/26348?v=4"});
    const [username, setUsername ] = useState(data.username)
    useEffect(()=> {
        async function fetchUser(){
            const res = await axios.get(`https://api.github.com/users/${username}`)
            setData({username :  res.data.login, image : res.data.avatar_url});
        }
        fetchUser()
    }, [username])
    async function search (term){
        setUsername(term);
    }
    return <>
    <h1>{data.username}</h1>
    <img src={data.image} alt="" />
        <Profile search={search}/>
    </>
}