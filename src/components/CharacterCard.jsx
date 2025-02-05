import React from 'react'


function CharacterCard({ info }) {
  const placeholderImage = 'https://i.pinimg.com/736x/25/1a/48/251a488ebc0c8352d7c15cf45673f5a5.jpg';
  return (
    <article className='character_card'>
      <img
       src={info.image ? info.image : placeholderImage} 
       alt={info.name} />

      <h4>{info.name}</h4>
      <p>{info.species}</p>
    </article>
  )
}


export default CharacterCard
