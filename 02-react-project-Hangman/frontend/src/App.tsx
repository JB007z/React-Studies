import { useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing'
function App() {
  const [wordToGuess,setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })
  const [guessedWords,setGuessedWords] = useState<string[]>([])  //<t> this is used to tell what type our state will have, any other type will throw an error
  
  return (
    <div className="container-fluid d-flex flex-column text-center min-vh-100">
  <div className="row flex-fill justify-content-center">
    <div className="col py-2">
      Win/Lose
    </div>
  </div>
  <div className="row flex-fill justify-content-center">
    <div className="col py-3 ">
      <HangmanDrawing/>
    </div>
    </div>
    <div className="row flex-fill justify-content-center">
    <div className="col py-2">
      KeyBoard Component
    </div>
    </div>
    
</div>
  )
}

export default App
