import { Login } from './Login'
import './App.css'

function App() {
  const onLogin = (event, data) => {
    event.preventDefault();
    console.log('data', data)
  }

  return (
    <>
      <Login event={onLogin} />
    </>
  )
}  

export default App
