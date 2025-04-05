function ShoppingListitem({id, name, quantity, completed}){
    return <li 
        style={{
            color : completed ? "grey" : "red",
            textDecoration : completed ? "line-through" : "none",
            padding : "10px"
            }}>
                {name} <br/>
                {quantity}
    </li>
}

export default ShoppingListitem;