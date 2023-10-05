export function Welcome({ name, age }) {
    return (
        <>
            <h1>Welcome, {name}</h1>
            {age && <p>You are {age} years old!</p>}
        </>
    )
}