function handleClick(){
    console.log("You clicked a Button");
}
export default function Clicker(){
    return <>
        <h1>Click Me</h1>
        <button onClick = {handleClick}>Click Me !!!</button>
    </>
}