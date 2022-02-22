import "../styles/Card.css";
import useFetchData from "../helpers/usefetchData";
import { SingleCharacter } from '../interfaces/types';
import green from "../assets/green.png" 
import red from "../assets/red.png"
import grey from "../assets/grey.png"

function Card():JSX.Element {
  const { characterList } = useFetchData();

  return (
  
    <>
    <div className="cards-container">
    {characterList.map(({name, status, species, image, location}: SingleCharacter) => 



<div className="card">
  <div className="card-image">
    <img src={image} alt="Rick Sanchez" />
  </div>
  <div className="card-content">
    <h1>{name}</h1>
    <section className="title">
      
      {status === "Alive" ? 
      <img src={green} className="icon" alt="Alive" /> : status === "Dead" ?
      <img src={red} className="icon" alt="Dead" /> 
      : <img src={grey} className="icon" alt="Dead" />}
      <p>
        {status} - {species}
      </p>
    </section>




    <section>
      <span>Last know location:</span>
      <a href={location.url}>{location.name}</a>
    </section>
    <section>
      <span>First seen in: </span>
      <a href={location.url}>{location.name}</a>
    </section>
  </div>
</div>

    
    
    
    
    
    )}
    </div>
    </>
    
  
  
  )
       
     
  
}

export default Card;


