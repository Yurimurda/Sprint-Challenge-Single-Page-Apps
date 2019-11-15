import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
        .then(response =>{
          
          console.log(response);
          setData(response.data.results);
        })
        .catch(error =>{
          console.log(error);
        });
      }, []);
  return( 
    <div><SearchForm data={data}/></div> 
  )
}


