import "./App.css";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Container } from "./Container";

function App() {
  return (
    <Container title={<Hello />}>
      <Message />
    </Container>
  );
}

export default App;
