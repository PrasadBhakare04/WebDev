import './Box.css'
export default function Box({isActive,idx, func}){
    return <div className='Box' style={{background : isActive ?  "red" : "black"}} onClick={() => {func(idx)}}></div>
}