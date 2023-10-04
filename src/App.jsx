import { useState } from 'react'
import './App.css'

function App() {


  function doSum(a, b){
    return <h2>{a + b}</h2>
  }

  return (
    <>
      {doSum(999,1)}
    </>
  )
}

export default App
