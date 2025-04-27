import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : [<Navbar/>, <Home/>]
    },
    {
      path : '/About/:username',
      element : [<Navbar/>, <About/>]
    }
  ])
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
