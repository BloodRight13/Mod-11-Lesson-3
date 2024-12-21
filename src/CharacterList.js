import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import CharacterDetail from './CharacterDetail';  
  
const publicKey = 'YOUR_PUBLIC_KEY';  
const hash = 'YOUR_HASH';  
  
const CharacterList = () => {  
  const [characters, setCharacters] = useState([]);  
  const [selectedCharacter, setSelectedCharacter] = useState(null);  
  
  useEffect(() => {  
   const fetchCharacters = async () => {  
    try {  
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`);  
      setCharacters(response.data.data.results);  
    } catch (error) {  
      console.error(error);  
    }  
   };  
   fetchCharacters();  
  }, []);  
  
  const handleCharacterClick = (character) => {  
   setSelectedCharacter(character);  
  };  
  
  return (  
   <div>  
    <h1>Marvel Comics Characters</h1>  
    <div className="character-grid">  
      {characters.map((character) => (  
       <div key={character.id} onClick={() => handleCharacterClick(character)}>  
        <img src={`$${character.thumbnail.path}.$$ {character.thumbnail.extension}`} alt={character.name} />  
        <p>{character.name}</p>  
       </div>  
      ))}  
    </div>  
    {selectedCharacter && <CharacterDetail character={selectedCharacter} />}  
   </div>  
  );  
};  
  
export default CharacterList;
