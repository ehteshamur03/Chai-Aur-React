/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  // let counter = 15;
  const addValue = () => {
    // console.log("click", counter)
    if (counter < 20) {
      counter = counter + 1
      setcounter(counter)
      
      // counter = counter + 1
      // setcounter(counter)
      // counter = counter + 1
      // setcounter(counter + 1)
      // setcounter(counter)

      setcounter((prevCounter=> prevCounter+1))
      setcounter((prevCounter=> prevCounter+1))
      setcounter((prevCounter=> prevCounter+1))
      setcounter((prevCounter=> prevCounter+1))
    }
  }

  const removeValue = () => {
    // console.log("click", counter)
    // counter = counter - 1
    // setcounter(counter - 1)
    // setcounter(counter)

    if (counter > 0) {
      counter = counter - 1
      setcounter(counter)
    }
  }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
