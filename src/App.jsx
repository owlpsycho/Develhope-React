import { useState } from 'react'
import './App.css'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
    {/* se leviamo la prop name non viene stampato il nome ma solo "Welcome,"" */}
      <Welcome  />
    {/* se non aggiungo name="Denis" a <Welcome /> viene renderizzato il valore che ho assegnato alla prop nella funzione */}

    </>
  )
}

export default App
