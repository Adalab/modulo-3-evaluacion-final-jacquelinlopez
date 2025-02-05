import React from 'react'

function FilterName({setFilterName}) {
const handleInput = (ev) =>{
  //console.log("Input value:", ev.target.value);
  setFilterName(ev.target.value.toLowerCase())
}

  return (
    <div className='input'>
        <label htmlFor="">Busca por personaje:</label>
        <input type="text" onChange={handleInput}/>
    </div>
  )
}

export default FilterName
