export default function ClickerForm({message}){
    function handleSubmit(e){
        e.preventDefault();
        alert(message);
    }
    return <>
        <form onSubmit={handleSubmit}>
            <button>Click Me</button>
        </form>
    </>
}