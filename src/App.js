import React from "react";
import Header from "./components/Header.js";
import Characters from "./components/CharacterList.js"
import WelcomePage from "./components/WelcomePage.js";
import Locations from "./components/LocationsList.js"

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage/>
      <div className="lists">
      <Characters />
      <Locations/>
      </div>
      
    </main>
  );
}
