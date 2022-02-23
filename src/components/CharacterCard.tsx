import "../styles/Card.css";
import { SingleCharacter, AllInfo } from '../interfaces/types';
import green from "../assets/green.png";
import red from "../assets/red.png";
import grey from "../assets/grey.png";
import Modal from "./Modal";

function CharacterCard({
  character,
  episode,
  location,
}: AllInfo): JSX.Element {
  return (
    <div className="card">
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
          <a href={character.location.url}>{character.location.name}</a>
        </section>
        <section>
          <span>First seen in: </span>
          <a href={character.origin.url}>{character.origin.name}</a>
        </section>

        

        <Modal
          character={character}
          episode={episode}
          location={location}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
