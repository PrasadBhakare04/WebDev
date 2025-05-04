import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
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
    const r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    console.log(data)
  }

  return (
    <>
    {isSubmitting && <div>Submitting</div>}
     <form onSubmit={handleSubmit(onSubmit)} >
      <div>
      <input type="text" {...register("username", {minLength : 5, error : {message : "Minimum username lenght is 5"}, required : true})}/>
      </div>
      <div>
      {errors.username && <span>This field is required</span>}
      <input type="password" {...register("password" , {minLength : 8, error : {message : "Minimum username lenght is 5"}})} />
      {errors.password && <span>This field is required</span>}
      </div>
      <button disabled = {isSubmitting}>Submit</button>
     </form>
    </>
  )
}

export default App
