export function AlertClock() {
  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return (
    <>
      <p>Click the button to see the current time.</p>
      <button onClick={handleButtonClick}>Click Me!</button>
    </>
  );
}
