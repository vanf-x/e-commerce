import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Mundo" />
    </div>
  );
}

export default App;
