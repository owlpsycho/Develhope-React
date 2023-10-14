import './App.css'
import Colors from './Colors'

function App() {

  return (
    <>
      <Colors 
        items={[
          {id:1, name:"Rosso"},
          {id:2, name:"Nero"},
          {id:3, name:"Viola"},
          {id:4, name:"Bianco"},
          {id:5, name:"Arancione"}
        ]} />
    </>
  )
}

export default App
