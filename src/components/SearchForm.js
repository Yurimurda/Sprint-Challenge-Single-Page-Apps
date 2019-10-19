import React, { useState } from "react";

const SearchForm=(props)=> {
  const [query, setQuery] = useState("");
  
  const characters = props.data.filter(character =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
  return (
    <div className="Characters">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by name"
          autoComplete="off"
        />
      </form>
      <div className="Character">
        {characters.map(data => {
          return (
            <div className="character-list " key={data.id}>
              <h2>
                {data.name}
              </h2>
              <h3 className="status">status: {data.status}</h3>
              <h3 className="species">species: {data.species}</h3>
              <h3 className="gender">gender: {data.gender}</h3>
              <img src={data.image} alt={data.name}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchForm;