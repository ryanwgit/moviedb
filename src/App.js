import React, { useState } from "react";
import Search from "./components/Search";

function App() {
    const apikey = "http://www.omdbapi.com/?i=tt3896198&apikey=d42e320c";
    const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
    });
    const handleInput = (e) => {
      let s = e.target.value;

      setState(prevState => {
        return {...prevState, s: s}
      })
      console.log(state.s);
      
    }
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
        <main>
          <Search handleInput={handleInput} />
        </main>
      </header>
    </div>
  );
}

export default App;
