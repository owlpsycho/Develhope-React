export function Welcome({ name, age }) {
    return (
      <>
        {name === "John" && age > 18 && age < 65 && (
          <div>
            <h1>Welcome, {name}</h1>
            <p>You are {age} years old!</p>
          </div>
        )}
      </>
    )
  }