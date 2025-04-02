import './App.css'
// import RentingList from './RentingList'
import Clicker from './ClickerExercise/Clicker'
import ClickerForm from './ClickerExercise/ClickerForm'
import Form from './ClickerExercise/Form'
import ColorBox from './State/ColorBoxExercise/ColorBox'
import ColorBoxGrid from './State/ColorBoxExercise/ColorBoxGrid'
import Counter from './State/Counter'
import Toggler from './State/Toggler'

function App() {
  const data = [
    {id : 1, name : "Ocean View Villa", price : 2900},
    {id : 2, name : "river bed Hut", price : 3000}
  ]
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFD700",
    "#8A2BE2",
    "#00FFFF",
    "#FF4500",
    "#40E0D0",
    "#ADFF2F"
]
  return (
    <>
      {/* <RentingList List = {data}/> */}
      {/* <Clicker/>
      <Form/>
      <ClickerForm message="Please Click Me again"/> */}
      {/* <Counter/> */}
      {/* <Toggler/> */}
      <ColorBoxGrid colors = {colors}/>
    </>
  )
}

export default App
