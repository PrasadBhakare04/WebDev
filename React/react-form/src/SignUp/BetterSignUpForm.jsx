import { useState } from "react";

export default function SignUpForm(){
    const[formData, setFormData] = useState({firstname : "", lastname : ""});
    function changeData(evt){
        const changedField = evt.target.name;
        const value = evt.target.value;
        setFormData(currData => {
            return {...currData, [changedField] : value}
        })
    }
    function reset(){
        setFormData({firstname : "", lastname : ""})
    }
    function clicked(){
        reset();
        console.log(formData.firstname, formData.lastname);
    }
    return <>
        <label htmlFor="firstname">Enter First Name</label>
        <input type="text" id='firstname' placeholder="First Name" name="firstname" value={formData.firstname} onChange={changeData}/>
        <label htmlFor="lastname">Enter Last Name</label>
        <input type="text" id="lastname" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={changeData}/>
        <button onClick={clicked}>Submit</button>
    </>
}