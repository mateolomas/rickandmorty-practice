import "../styles/Card.css";
import useFetchData from "../hooks/useFetchData";
import CharacterCard from "./CharacterCard";
import "../styles/searchbar.css";
import { useState } from 'react';



function Card(): JSX.Element {

  
  const [search, setSearch] = useState<string>("");
  const characterList = useFetchData(search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
 

  //if (characterList.loading) return <h1>Loading...</h1>;
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
        {
          characterList?.dataList?.map(character => 
          <CharacterCard character={character.character} location={character.location} episode={character.episode} />)
      
        }
      </div>
    </>

  )



}

export default Card;


