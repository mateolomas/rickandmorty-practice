import "../styles/Card.css";
import useFetchData from "../hooks/useFetchData";
import { SingleCharacter } from '../interfaces/types';
import CharacterCard from "./CharacterCard";
import { useState } from 'react';
import "../styles/searchbar.css";
import Search from './Search';


function Card(): JSX.Element {
  const { characterList, LocationList, EpisodeList, loading, error } = useFetchData();
  const {search, setSearch} = Search();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>

    <div className="search-bar-container">
        <form className="search-bar" >
        <input type="text" placeholder="Search for a character..." onChange={event => { setSearch(event.target.value) }} />
        <button>Search</button>
        </form>
    </div>
   


      <div className="cards-container">
        {characterList.filter((val) => {
          if (search == "") return val;
          else if (val.name.toLowerCase().includes(search.toLowerCase())) return val;
        }
        ).map(({ name, status, species, image, location, origin }: SingleCharacter) =>
          <CharacterCard
            character={{name, status, species, image, location, origin}}
            
          />

        )}
      </div>
    </>



  )



}

export default Card;


