import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataApi from "../services/api";
import Header from "./Header";


function App() {

  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    getDataApi().then((data)=>{setCharacters(data)})
  } , [])

  return (
   
      <>

      <Header />
      <Routes>
        
        <Route path="/" element={<CharacterList data={characters} />} />

      </Routes>
      </>
    
  )
}

export default App