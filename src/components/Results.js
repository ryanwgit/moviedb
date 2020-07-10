import React from 'react'
import Result from "./Result";
import Popup from "./Popup";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map(result => (
        <Result key={result.imdbID} result={result} openPopup={openPopup}/>
      ))}
    </section>
  )
}

export default Results
