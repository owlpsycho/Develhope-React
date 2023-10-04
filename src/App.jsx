import { useState } from 'react'
import './App.css'
import { Hello } from './Hello'

function App() {


  function Hello (name) {
    return <h1>Hello, {name}!</h1>
}

  return (
    <>
      {Hello("Denis")}
    </>
  )
}

export default App
