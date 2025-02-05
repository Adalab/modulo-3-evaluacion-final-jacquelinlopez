import React from 'react'
import FilterHouse from './FilterHouse'
import FilterName from './FilterName'

function Filters({setFilterName, setFilterHouse}) {
const handleForm=(ev) =>{
  ev.preventDefault()
}

  return (
      <form action="" onSubmit={handleForm}>
        <FilterName setFilterName={setFilterName}/>
        <FilterHouse setFilterHouse={setFilterHouse}/>
      </form>
  )
}

export default Filters
