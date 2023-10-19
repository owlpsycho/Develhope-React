import "./App.css";
import React, { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      <Clock />
      {/* il Contex Provider è responsabile di rendere disponibile il value "language" a tutti i componenti figli all'interno del suo ambito. 
      Senza il provider, il componente Clock non avrà accesso a questo valore e perderà la sua capacità di rispondere alle modifiche della lingua selezionata */}
    </div>
  );
}

export default App;
