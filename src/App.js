import React, {useState} from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup"
import axios from "axios";

function App() {

  const [state, setState] = useState({s: "", results: [], selected: {}});

  const apiurl = "http://www.omdbapi.com/?apikey=d42e320c";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({data}) => {
        let results = data.Search;

        setState(prevState => {
          return {
            ...prevState,
            results: results
          }
        });
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {
        ...prevState,
        s: s
      };
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({data}) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return {
          ...prevState,
          selected: result
        }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {
        ...prevState,
        selected: {}
      }
    });
  }

  return (<div className="App">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bebas+Neue&display=swap');
    </style>
    <header>
      <h1>Your Movie Source</h1>
    </header>
    <main>
      <Search handleInput={handleInput} search={search}/>

      <Results results={state.results} openPopup={openPopup}/> {
        (typeof state.selected.Title != "undefined")
          ? <Popup selected={state.selected} closePopup={closePopup}/>
          : false
      }
    </main>
  </div>);
}

export default App;
