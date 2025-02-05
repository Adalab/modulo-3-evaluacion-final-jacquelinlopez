import React from 'react'

function FilterHouse({setFilterHouse}) {

 const handleSelect = (ev) =>{
    setFilterHouse(ev.target.value);
 };

  return (
    <div className='select'>
      <label htmlFor="">Seleccione la casa:</label>
      <select name="" id="" onChange={handleSelect}> 
        <option value="">Todos</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  );
}

export default FilterHouse
