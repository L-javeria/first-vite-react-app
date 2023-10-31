import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);

  const AddTheCounter = () => {
    setCounter(counter + 1)
  }

  const minusTheCounter = () => {
    setCounter(counter - 1)
    let limit = counter - 1
    if(limit < 0){
      resetTheCounter()
      return(
        <p>You have reached the limit</p>
      )
    }
    }

  const resetTheCounter = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Here I m</h1>
      <button onClick={AddTheCounter}>Counter {counter}</button>
      <button onClick={minusTheCounter}> Remove </button>
      <button onClick={resetTheCounter}> Reset </button>
      <p> Love to Code With React </p>
    </>
  )
}

export default App
