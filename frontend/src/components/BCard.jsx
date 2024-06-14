import './BCard.css';
import { useState } from 'react';
import { CardEdit } from './CardEdit';
import './BCard.css'

export function BCard({ cards }) {
    const [editCard, setEditCard] = useState(null);

    function editDetails(card) {
        console.log("edit called", card);
        setEditCard(card);
    }

    function closeEdit() {
        setEditCard(null);
    }

    return (
        <div id='cardBoard' > 
            {editCard ? (
                <div>
                    <CardEdit card={editCard} />
                    <button onClick={closeEdit}>Close</button>
                </div>
            ) : (
                cards.map((card, index) => (
                    <div className='card' >
                        <div id='editndel'>
                            <button onClick={() => editDetails(card)}>Edit</button>
                            <button onClick={async()=>{
                                const res = await fetch('http://localhost:3000/cards/deleteCard',{
                                    method:"DELETE",
                                    body:JSON.stringify({
                                        id:card._id
                                    }),
                                    headers:{
                                        "Content-type":"application/json" 
                                    }
                                });
                            }}>Delete</button>
                        </div>
                        <h1>Name: {card.name}</h1>
                        <p style={{ fontSize: 20 }}>Description: {card.description}</p>
                        <h2>Interests</h2>
                        {card.interests.map((interest, i) => (
                            <p key={i}>{interest}</p>
                        ))}
                        <button>LinkedIn</button>
                        <button>Twitter</button>
                    </div>
                ))
            )}
        </div>
    );
}


//Styles
// const styles = {
//     cardBoard:{
//         display:'flex'
//     },
//     card: {
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         padding: '20px',
//         margin: '20px',
//         maxWidth: '400px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#f8f9fa',
//       },
//       name: {
//         fontSize: '24px',
//         marginBottom: '10px',
//         color: '#333',
//       },
//       description: {
//         fontSize: '16px',
//         color: '#555',
//         marginBottom: '15px',
//       },
//       socialLinks: {
//         display: 'flex',
//         marginBottom: '15px',
//       },
//       link: {
//         textDecoration: 'none',
//         color: '#fff', // Text color
//         padding: '10px 15px', // Padding for the button
//         borderRadius: '5px', // Border radius for rounded corners
//         backgroundColor: '#007BFF', // Background color for the button
//         display: 'inline-block', // Display as inline-block to be side by side
//         margin: '10px', // Margin between buttons
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
//       },
//       interestsHeader: {
//         fontSize: '18px',
//         marginBottom: '10px',
//         color: '#333',
//       },
//       interestsList: {
//         listStyle: 'none',
//         padding: 0,
//         margin: 0,
//       },
//       interestItem: {
//         fontSize: '14px',
//         marginBottom: '5px',
//         color: '#555',
//       },
//     };