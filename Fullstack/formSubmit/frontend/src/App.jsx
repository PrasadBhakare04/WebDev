import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  //Simulating a network delay
  function addDelay(d) {
    return new Promise ((resolve, reject ) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }


  async function onSubmit(data){
    if(data.username === "Prasad"){
      setError("blocked", {message : "The user is blocked"});
    }
    else {
      const r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
      }, body: JSON.stringify(data)})
      console.log(data) 
    }
  }

  return (
    <>
    {isSubmitting && <div>Submitting</div>}
     <form onSubmit={handleSubmit(onSubmit)} >
      <div>
      <input type="text" {...register("username", {minLength : {value : 5, message : "Minimum username length is 5"}, required : true})}/>
      </div>
      <div>
      {errors.username && <span>{errors.username.message}</span>}
      <input type="password" {...register("password" , {minLength : {value : 8, message : "Minimum length of password is 8"}})} />
      {errors.password && <span>{errors.password.message}</span>}
      </div>
      {errors.blocked && <span>{errors.blocked.message}</span>}
      <button disabled = {isSubmitting}>Submit</button>
     </form>
    </>
  )
}

export default App
