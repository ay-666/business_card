import { InterestForm } from "./InterestForm";
import { useState } from "react";



export function CardInput(){
    
    const [name,setName] = useState();
    const [desc,setDesc] = useState();
    const [interests,setInterests] = useState([]);
    
    function handleAddInterests(interest){
        setInterests([...interests,interest]);
    }
    async function saveDetails(){
        // console.log(name);
        // console.log(desc);
        // console.log(interests);

        const res = await fetch('http://localhost:3000/cards/addCard',{
            method:"POST",
            body:JSON.stringify({
                name:name,
                description:desc,
                interests:interests
            }),
            headers:{
                "Content-type":"application/json"
            }
        });
        const jsonData = res.json();
        alert('Saved sucessfully');
        setName('');
        setDesc('');
        setInterests(['']);
    }


    return <div style={{display:"flex",width:300,flexDirection:"column"}}>
        <input onChange={(e)=>{
            setName(e.target.value);
        }} value={name} type="text" placeholder="Enter Name"/>
        <input style={{marginTop:10}} onChange={(e)=>{
            setDesc(e.target.value);
        }} type="text" value={desc} placeholder="Enter description"></input>
        <InterestForm addToInterest={handleAddInterests} ></InterestForm>
        <h2>Added Interests</h2>
        <div>{interests.map((interest)=>{
       return  <h3>{interest}</h3>
    })}</div>

    <button onClick={()=>{
        setInterests([]);
    }} style={{margin:10}} >Clear interests</button>

        <button onClick={saveDetails}>Save Card details</button>
    </div>
}