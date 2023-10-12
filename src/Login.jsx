import React, { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setData(data => {
      return {
        ...data, 
        [name]: value
      }
    });
  }

  return (
    <>
      <form>
        <input type="text" name="username" value={data.username} onChange={handleInputChange} />
        <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
        <button onClick={(event) => event(event, data)} disabled={data.username.length <= 0 || data.password.length <= 0 ? true : false}>Login</button>
      </form>
    </>
  )
}
