import RentalPropertyItem from "./RentalPropertyItem";

export default function RentalProperty({properties}){
    return (
        <ul className="list">
            {properties.map(p=> {
                return <RentalPropertyItem key={p.id}
                {...p}
                />
})}
        </ul>
    )
}

// const properties = [
//     {id : 1, name : '4BHK', price : 400, rating : "4 stars"},
//     {id : 2, name : 'villa', price : 650, rating : "4 stars"},
//     {id : 3, name : 'Fort', price : 300, rating : "4 stars"},
//     {id : 4, name : 'Garden', price : 255, rating : "4 stars"},
//     {id : 5, name : 'River', price : 375, rating : "4 stars"}
// ]