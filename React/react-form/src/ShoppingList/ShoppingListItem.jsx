import { useState } from "react"
import {v4 as uuid} from "uuid"
import ShoppingListFormValidation from "./ShoppingListFormValidation"
export default function ShoppingListItem(){
    const[list, setList] = useState([
        {product : "banana", qty : 2, id : uuid()},
        {product : "apple", qty : 12, id : uuid()}
    ])
    function getItem(gotProduct, gotQty) {
        setList(currList => {
            return [
                ...currList, 
                {product : gotProduct, qty : gotQty, id : uuid()}
            ]
        })
    }
    return<>
        <h1>This is the shopping list</h1>
        <ul>
            {
                list.map(i => {
                    return <li key={i.id}
                    style={{listStyleType:"none"}}>
                        {i.product} - {i.qty}
                    </li>
                })
            }
        </ul>
        <ShoppingListFormValidation func={getItem}/>
    </>
}