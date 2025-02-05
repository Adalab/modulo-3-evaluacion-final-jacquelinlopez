import React from 'react'
import { Link } from 'react-router-dom';


function CharacterDetails({ data }) {
  const imageCharacter = data.image 
  ? data.image : 'https://i.pinimg.com/736x/25/1a/48/251a488ebc0c8352d7c15cf45673f5a5.jpg';


  const status = data.alive ? "vivo" : "muerto";

  return ( 
    <>

      <Link to={`/`}>
        <div className='btn_back'> 🔙 Volver</div>
      </Link>
      <div className='detail'>

        <img src={imageCharacter} alt="imagen personaje" />
        <h2>{data.name}</h2>
        <p>Genero: {data.gender}</p>
        <p>Status:{status}</p>
        <p>Especie: {data.species} 👤 </p>
        <p>Casa: {data.house}</p>

      </div>
    
    </>

  )
}

export default CharacterDetails
