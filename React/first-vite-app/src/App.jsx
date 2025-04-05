import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import List from "./List";
import Lucky from "./additionals/Lucky";
import Heading from "./additionals/Heading";
import ColorList from "./additionals/colorList";
import ShoppingList from "./ShoppingList";
import RentalProperty from "./RentalProperty";

function App() {
  const data = [
    { id: 1, name: "Watermelon", quantity: 2, price: 20, completed: true },
    { id: 2, name: "milk", quantity: 3, price: 20, completed: true },
    { id: 3, name: "eggs", quantity: 30, price: 175, completed: false }
  ];
  const properties = [
    {id : 1, name : '4BHK', price : 400, rating : "4 stars"},
    {id : 2, name : 'villa', price : 650, rating : "4 stars"},
    {id : 3, name : 'Fort', price : 300, rating : "4 stars"},
    {id : 4, name : 'Garden', price : 255, rating : "4 stars"},
    {id : 5, name : 'River', price : 375, rating : "4 stars"}
  ];
  return (
    <>
      {/* <Heading color="teal" size="100px"/> */}
      {/* <Greeter name="Prasad" />
   <Die />
    <Die sides={20} />
    <Die sides={345} />
    <List values={[10, 20, 30]} />
    <Lucky />
    <Heading/> */}
      {/* <Lucky />
    <ColorList colors = {["red", "black", "blue"]}/> */}
      {/* <ShoppingList items={data} /> */}
      <RentalProperty properties={properties}/>
    </>
  );
}

export default App;
