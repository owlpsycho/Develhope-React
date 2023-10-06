import { useState } from 'react'
import './App.css'
import { AlertClock } from './AlertClock'

function App() {

  function handleButtonClick() {
    alert('Current time: ' + new Date().toLocaleTimeString())
    }

  return (
    <>
      <AlertClock event={handleButtonClick}/>
    </>
  )
}

export default App
