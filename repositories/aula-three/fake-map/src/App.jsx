import { useEffect, useState } from 'react';
import Card from './Card';


function App() {
  
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("effect")
    fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setData(data))
  }, [])

  
  console.log(data)

  return(
    <>
  <h1>Items: </h1>
  <Card 
    title={data.title}
    price={data.price}
    category={data.category}
    src={data.image}
    description={data.description}
    />
  </>
  )
}

export default App;   