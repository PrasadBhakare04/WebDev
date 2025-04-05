import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeperExercise/ScoreKeeper'
import EmojiArray from './Objects/EmojiArray'

function App() {
  return(
    <>
      {/* <Counter/> */}
      {/* <Dumbo/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiArray /> */}
      <ScoreKeeper num = {10}/>
    </>
    )
}

export default App
