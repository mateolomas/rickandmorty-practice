import "../styles/Card.css";
import {  AllInfo } from '../interfaces/types';
import green from "../assets/green.png";
import red from "../assets/red.png";
import grey from "../assets/grey.png";
import Modal from "./Modal";
import { useState } from "react";
function CharacterCard({character, location, episode}: AllInfo): JSX.Element 
{
  const [modal, setModal] = useState<Boolean>(false);
  return (
    <div className="card" 
    onClick={() => {
      setModal(!modal);
    }}
  >
      <div className="card-image">
        <img src={character.image} alt="Rick Sanchez" />
      </div>
      <div className="card-content">
        <h1>{character.name}</h1>
        <section className="title">
          {character.status === "Alive" ? (
            <img src={green} className="icon" alt="Alive" />
          ) : character.status === "Dead" ? (
            <img src={red} className="icon" alt="Dead" />
          ) : (
            <img src={grey} className="icon" alt="Dead" />
          )}
          <p>
            {character.status} - {character.species}
          </p>
        </section>
        <section>
          <span>Last know location:</span>
          <a href={location.url}>{location.name}</a>
        </section>
        <section>
          <span>First seen in: </span>
          <a href={episode.url}>{episode.name}</a>
        </section>

        
        
      </div>
      {modal && <Modal character={character} location={location} episode={episode}  />}
      
      
    </div>
  );
}

export default CharacterCard;
