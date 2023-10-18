import './App.css'
import { Welcome } from './Welcome'
import { Age } from './Age'

function App() {

  return (
    <>
      <Welcome name="Denis" />
      <Age age={21} />
    </>
  )
}

export default App
