import { Login } from './Login'
import './App.css'
import { UncontrolledLogin } from './UncontrolledLogin';

function App() {

  const onLogin = (event, data) => {
    event.preventDefault();
    console.log('data', data)
  }

  return (
    <>
      <Login event={onLogin} />
      <UncontrolledLogin />
    </>
  )
}

export default App