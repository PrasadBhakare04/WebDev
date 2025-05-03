import {v4 as uuid} from 'uuid'
export default function Card ({items}){
    // console.log(items)
    return <>
    {items.map(item => {
        return <div key={uuid()}>{item.title}
        <p>{item.body}</p><br />
        </div>
    })}
    </>
}