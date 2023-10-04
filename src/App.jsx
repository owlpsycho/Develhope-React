import { useState } from 'react'
import './App.css'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
      <Welcome name={<strong>Denis</strong>}age={27}/> 
    </>
  )
}

export default App