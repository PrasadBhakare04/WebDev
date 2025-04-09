export default function ColorList({colors}){
    return <ul>
        {colors.map((c) => (<li style={{color : c}}>{c}</li>))}
    </ul>
}