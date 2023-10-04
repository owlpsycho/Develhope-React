import { useState } from 'react'
import './App.css'

function App() {


  function sayHello (name) {
    return <h1>Hello, {name}!</h1>
}

  return (
    <>
      {sayHello("Denis")}
    </>
  )
}

export default App
