export default function RentalPropertyItem({name, price, rating}){
    return <li style={{padding : "20px" , color : "grey"}}>
        {name}<br/>{price}<br/>{rating}
    </li>
}
