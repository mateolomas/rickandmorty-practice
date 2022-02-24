import "../styles/Card.css";
import useFetchData from "../hooks/useFetchData";
import { SingleCharacter, AllInfo, resultLocation } from '../interfaces/types';
import CharacterCard from "./CharacterCard";
import "../styles/searchbar.css";
import useCharacterbyName from '../hooks/useCharacterbyName';
import { useState } from 'react';



function Card(): JSX.Element {

  const characterList = useFetchData("character");
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const singleCharacter = useCharacterbyName(search);

  if (characterList.loading) return <h1>Loading...</h1>;
  if (characterList.error) return <h1>{Error}</h1>;

  return (
    <>
      <div className="cards-container">
        <div className="search-bar-container">
          <form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Search for a character..." value={search} onChange={event => { setSearch(event.target.value) }} />
            <button>Search</button>
          </form>
        </div>
        {singleCharacter.map((single) => 
        <>
          <CharacterCard character={single} />
        </>
        )}

      </div>
    </>

  )



}

export default Card;


