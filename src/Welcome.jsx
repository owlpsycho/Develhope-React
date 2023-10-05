export function Welcome({ name, age }) {
    return (
      <>
        <h1>Welcome, {name}</h1>
        {age>=18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
      </>
    )
  }