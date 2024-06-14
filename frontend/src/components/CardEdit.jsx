import { InterestForm } from "./InterestForm";
import { useState } from "react";


export function CardEdit({card}){
    console.log('card edit called')

    const [name,setName] = useState(card.name);
    const [desc,setDesc] = useState(card.description);
    const [interests,setInterests] = useState(card.interests);

    function handleAddInterests(interest){

        setInterests([...interests,interest]);
    }

    async function saveDetails(){

        const res = await fetch('http://localhost:3000/cards/updateCard',{
            method:"PUT",
            body:JSON.stringify({
                 id:card._id,
                 name:name,
                 description:desc,
                 interests:interests
            }),
            headers:{
               "Content-type":"application/json" 
            }
        })
        const jsonData = await res.json();
        alert('Details saved successfully')
    }


    return <div style={{display:"flex",width:300,flexDirection:"column",padding:10,margin:10}}>
    <input onChange={(e)=>{
        setName(e.target.value);
    }}  type="text" value={name} placeholder="Enter Name"/>
    <input style={{marginTop:10}} onChange={(e)=>{
        setDesc(e.target.value);
    }} type="text" value={desc} placeholder="Enter description"></input>
    <InterestForm addToInterest={handleAddInterests} ></InterestForm>
    <div>{interests.map((interest)=>{
       return  <h3>{interest}</h3>
    })}</div>

    <button onClick={()=>{
        setInterests([]);
    }} style={{margin:10}} >Clear interests</button>
    <button onClick={saveDetails}>Save Card details</button>
</div>
}