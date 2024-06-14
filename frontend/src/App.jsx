import { useState } from 'react'
import { BCard } from './components/BCard'

import './App.css'
import { CardInput } from './components/CardInput'

function App() {

  const [cards,setCards] = useState([]);
  const [isInputEnabled,setInputEnabled] = useState(false)

  fetch('http://localhost:3000/cards').then(async (res)=>{
    const jsonData = await res.json();
    setCards(jsonData.cards);
  });


  return (
    <div>
      
      <BCard cards = {cards}></BCard>
      {isInputEnabled ?  <CardInput></CardInput> :  <></> }
      <button onClick={()=>{
        setInputEnabled(!isInputEnabled);
      }}  style={{margin:10}} >{isInputEnabled ? "CLose" : "Add Another card"} </button>
    </div>
  )
}

export default App
