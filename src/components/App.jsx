import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import CharacterList from "./CharacterList";
import api from "../services/api";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    getDataApi().then((data)=>{setCharacters(data)})
  } , [])

  return (
   
      <>
      <Routes>
        
        <Route path="/" element={<CharacterList data={characters} />} />

      </Routes>
      </>
    
  )
}

export default App