import { useState } from 'react'
import './App.css'

function App() {


  function sayHello (name){
    return <h1>Hello, {name}!</h1>
}

  return (
    <>
      {Hello (<span>Denis</span>)}
      //questa volta non esce niente e mi da come errore "Hello is not defined"
    </>
  )
}

export default App
