import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const isButtonDisabled = data.username === "" || data.password === "";

  const handleLogin = (event) => {
    event.preventDefault(); //In questo modo evitiamo il comportamento predefinito di invio del modulo
    console.log(data);
  };

  const handleReset = () => {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isButtonDisabled}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
}
