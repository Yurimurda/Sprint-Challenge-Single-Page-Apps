import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/2/`, {
        
      })
      .then(response => {
        const characters = response.data.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Rick and Morty characters", response);
        setData(characters);
      });
  }, [query]);
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
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="Character">
        {data.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h2>
                {data.name}
              </h2>
              <h3 className="capital">name: {data.name}</h3>
              <h3 className="capital">status: {data.status}</h3>
              <h3 className="capital">species: {data.species}</h3>
              <h3 className="capital">type: {data.type}</h3>
              <h3 className="capital">gender: {data.gender}</h3>
              <h3 className="insert">origin:{data.origin}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}




// export default function Characters() {
  
//   useEffect(() => {
    
//   }, [query]);
//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };
//   return (
//     <div className="Characters">
//       <form className="search">
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           name="name"
//           tabIndex="0"
//           className="prompt search-name"
//           placeholder="search by name"
//           autoComplete="off"
//         />
//       </form>
//       <div className="Character">
//         {data.map(data => {
//           return (
//             <div className="character-list " key={data._id}>
//               <h2>
//                 {data.name}
//               </h2>
//               <h3 className="capital">name: {data.name}</h3>
//               <h3 className="capital">status: {data.status}</h3>
//               <h3 className="capital">species: {data.species}</h3>
//               <h3 className="capital">type: {data.type}</h3>
//               <h3 className="capital">gender: {data.gender}</h3>
//               <h3 className="insert">origin:{data.origin}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
