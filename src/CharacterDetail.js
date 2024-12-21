import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
  
const publicKey = 'YOUR_PUBLIC_KEY';  
const hash = 'YOUR_HASH';  
  
const CharacterDetail = ({ character }) => {  
  const [characterDetails, setCharacterDetails] = useState({});  
  
  useEffect(() => {  
   const fetchCharacterDetails = async () => {  
    try {  
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}?ts=1&apikey=${publicKey}&hash=${hash}`);  
      setCharacterDetails(response.data.data.results[0]);  
    } catch (error) {  
      console.error(error);  
    }  
   };  
   fetchCharacterDetails();  
  }, [character]);  
  
  return (  
   <div>  
    <h2>{characterDetails.name}</h2>  
    <p>{characterDetails.description}</p>  
    <h3>Comics:</h3>  
    <ul>  
      {characterDetails.comics && characterDetails.comics.items.map((comic) => (  
       <li key={comic.name}>{comic.name}</li>  
      ))}  
    </ul>  
   </div>  
  );  
};  
  
export default CharacterDetail;