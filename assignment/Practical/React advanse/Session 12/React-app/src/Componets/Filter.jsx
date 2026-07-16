function Filter({filter,setFilter}) {

  return (

    <input

      type="text"

      placeholder="Search cuisine..."

      value={filter}

      onChange={(e)=>setFilter(e.target.value)}

    />

  );

}

export default Filter;