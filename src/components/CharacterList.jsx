import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ data  }) {
//console.log(props)

const html = data.map(character => <CharacterCard  key={character.id} info={character}/>)

  return (
    <>
    {html}
    </>
  )
}

export default CharacterList
