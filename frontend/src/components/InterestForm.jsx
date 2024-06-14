import { useState } from "react"



export function InterestForm({addToInterest}){

    const [interest,setInterest] = useState('');

    function addInterest(){
        if (interest.trim() !== '') {
            addToInterest(interest);  
            
            setInterest('');  
           
        }
    }

    return <div>
        <input onChange={(e)=>{
            setInterest(e.target.value)
        }} type="text" value={interest} placeholder="Type Interest" />
       
        <button onClick={addInterest} style={{margin:10}}>Add Intereset</button>
    </div>
}