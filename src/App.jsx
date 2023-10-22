import "./App.css";
import FilteredList from "./FilteredList";

function App() {
  return (
    <>
      <FilteredList
        list={[
          {
            name: "Denis",
            id: 28,
            age: 21,
          },
          {
            name: "Nicola",
            id: 20,
            age: 27,
          },
          {
            name: "Andrea",
            id: 1,
            age: 17,
          },
        ]}
      />
    </>
  );
}

export default App;
