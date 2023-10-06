import { Button } from "./Button"

export function AlertClock() {
    function handleButtonClick() {
        alert('Current time: ' + new Date().toLocaleTimeString())
        }
        return (
            <div>
                <p>Click the button to see the current time.</p>
                <Button event={handleButtonClick} title="Click Me!" />
            </div>
        )
}