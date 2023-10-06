export function AlertClock({ event }) {
        return (
            <div>
                <p>Click the button to see the current time.</p>
                <button onClick={event}>Click Me!</button>
            </div>
        )
}