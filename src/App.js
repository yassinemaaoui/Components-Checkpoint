import logo from './logo.svg';
import './App.css';
import React from "react";
import FullName from "./Component/Profils/FullName";
import Address from  "./Component/Profils/Address";
import PhotoProfil from "./Component/Profils/ProfilPhoto";
function App() {
  return (
    <div>
      <FullName/>
      <Address/>
      <PhotoProfil/>
    </div>
  );
}

export default App;
