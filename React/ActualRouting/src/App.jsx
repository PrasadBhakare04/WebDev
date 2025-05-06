import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {[<Navbar/>, <Home/>]}/>
        <Route path='/About' element = {[<Navbar/> , <About/>]}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
