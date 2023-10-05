export function Welcome({ name, age }) {
    return (
        <>
            <h1>Welcome, {name}</h1>
            {age>=18 && <p>You are {age} years old!</p>}
        </>
    )
}