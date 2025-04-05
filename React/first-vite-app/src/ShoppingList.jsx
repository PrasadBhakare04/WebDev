import ShoppingListitem from "./ShoppingListitem";
import './List.css'

export default function ShoppingList({ items }) {
  return (
    <ul className="list">
      {items.map((i) => (
        <ShoppingListitem 
            key = {i.id}
            {...i}
        />
      ))}
    </ul>
  );
}

// const data = [
//     {name : "Watermelon", quantity : 2, price : 20, completed : true},
//     {name : "milk", quantity : 3, price : 20, completed : true},
//     {name : "eggs", quantity : 30, price : 175, completed : false}
// ]
