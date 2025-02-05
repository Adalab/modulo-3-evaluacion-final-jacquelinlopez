import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getDataApi from "../services/api";
import Header from "./Header";
import Filters from "./Filters";


function App() {

  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //datos api
  useEffect(()=>{
    getDataApi(filterHouse)
    .then((data)=>{
      setCharacters(data);
    });

    
  } , [filterHouse]);


  //filtro para buscar personajes y casa 
  const filtersCharacters = characters
  .filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()))
  .filter((item)=> (filterHouse ? item.house === filterHouse : true));


  //

  return (
   
      <>

        <Header />
        
        <Routes>
      
          <Route path="/" element={
            <>
              <Filters setFilterName={setFilterName} setFilterHouse ={setFilterHouse}/>
              {filtersCharacters.length > 0 ? (
              <CharacterList  data={filtersCharacters}  /> 
            ) : (
              <p>Ups! No existe este personaje en el mundo magico.</p>
            )}
            </>
         } />
                
        </Routes>
     
      </>
  )
}

export default App