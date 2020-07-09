import React from 'react'

function Search ({ handleInput }) {
  return (
    <section className="searchbox-wrap">
      <input type="text" placeholder="Know any good movies?" className="searchBox" onChange={handleInput}/>
    </section>
  )
}

export default Search
