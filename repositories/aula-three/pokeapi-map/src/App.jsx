import { useEffect, useState } from 'react';
import PokeCard from "./PokeCard"

function App() {
  
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("effect")
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setData(data))
  }, [])

  
  console.log(data)

  return(
    <>
  <h1>Items: </h1> 
    <PokeCard
      name={data?.name}
      image={data?.sprites?.front_default}
      type={data?.types?.[0]?.type?.name}
      />
  </>
  )
}

export default App;   
