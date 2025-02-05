import "../styles/App.scss";
import { Routes, Route, matchPath } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState, } from "react";
import CharacterList from "./CharacterList";
import getDataApi from "../services/api";
import Header from "./Header";
import Filters from "./Filters";
import CharacterDetails from "./CharacterDetails";



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


const {pathname} = useLocation()
const characterRoute = matchPath("/character/:idCharacter", pathname)
const characterIdUrl = characterRoute ?characterRoute.params.idCharacter : null ;

const characterDetail = characters.find(item => item.id === characterIdUrl )


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
              <h3>Ups! No existe este personaje en el mundo mágico.
                Creo que eres un Muggle!</h3>
            )}
            </>
         } />
          <Route path="/character/:idCharacter" element={<CharacterDetails data={ characterDetail} />} />  
            
        </Routes>
     
      </>
  )
}

export default App