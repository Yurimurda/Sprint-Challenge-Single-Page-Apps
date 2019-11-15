import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";

const SearchForm=(props)=> {
  const [query, setQuery] = useState("");
  
  const characters = props.data.filter(character =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );

  const locations = props.data.filter(location =>
    location.name.toLowerCase().includes(query.toLowerCase())
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
            <CharacterCard
            key={data.id}
            
            name={data.name}
            status={data.status}
            species={data.species}
            gender={data.gender}
            // src={data.image} 
            />
            
          );
        })}
      </div>
      <div className="location">
        {locations.map(data => {
          return (
            <LocationCard
            key={data.id}
            
            name={data.name}
            status={data.type}
            species={data.dimension}
            // src={data.image} 
            />
            
          );
        })}
      </div>
    </div>
  );
}

export default SearchForm;