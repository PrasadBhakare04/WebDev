export default function Player({number, score}){
    return <li>
        Player {number} : Score : {score}
        <button>+</button>
        <button>-</button>
    </li>
}