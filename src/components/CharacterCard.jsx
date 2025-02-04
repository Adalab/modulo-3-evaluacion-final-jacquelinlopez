import React from 'react'

function CharacterCard({ info }) {
  return (
    <article>
      <img src={info.image} alt={info.name}/>
      <h4>{info.name}</h4>
      <p>{info.species}</p>
    </article>
  )
}

export default CharacterCard
