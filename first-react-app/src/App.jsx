import './App.css'
// import RentingList from './RentingList'
import Clicker from './ClickerExercise/Clicker'
import ClickerForm from './ClickerExercise/ClickerForm'
import Form from './ClickerExercise/Form'

function App() {
  const data = [
    {id : 1, name : "Ocean View Villa", price : 2900},
    {id : 2, name : "river bed Hut", price : 3000}
  ]
  return (
    <>
      {/* <RentingList List = {data}/> */}
      <Clicker/>
      <Form/>
      <ClickerForm message="Please Click Me again"/>
    </>
  )
}

export default App
