import React, {useState} from "react";
import Counter from "./components/Counter";


function App() {
  const [value, setValue] = useState("IDOL")

 
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
