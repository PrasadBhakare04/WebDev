function handleSubmit(e){
    e.preventDefault();
    console.log('You submitted the form')
}
export default function Form(){
    return <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
}