import { useState } from "react";

export default function SignUpForm(){
    const[firstName, setFirstName] = useState('');
    function changeFirstName(evt){
        setFirstName(evt.target.value);
    }

    const [lastName, setLastName] = useState('');
    function changeLastName(evt){
        setLastName(evt.target.value);
    }
    return <>
        <label htmlFor="firstname">Enter First Name</label>
        <input type="text" id='firstname' placeholder="First Name" value={firstName} onChange={changeFirstName}/>
        <label htmlFor="lastname">Enter Last Name</label>
        <input type="text" id="lastname" placeholder="Last Name" value={lastName} onChange={changeLastName}/>
    </>
}