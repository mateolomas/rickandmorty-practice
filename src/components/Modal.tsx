import { useState } from "react";
import { AllInfo } from "../interfaces/types";
import "../styles/modal.css";


function Modal({ character, location, episode }: AllInfo): JSX.Element {


  //const [nameCharacter, setNameCharacter] = useState<string>("");
  const [modal, setModal] = useState<Boolean>(false);

  //const searchCharacter = useFetchData(nameCharacter);
  //modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
  return (
    <>
      <div className="modal-container" >
          <div className="modal">
            <div onClick={() => setModal(!modal)} className="overlay"></div>
            <div className="modal-content">
              <div className="modal-wrapper">
                <div className="modal-header">
                  <img
                    loading="lazy"
                    src={character.image}
                    alt={character.name}
                  />
                </div>
                <div className="modal-body">
                  <div className="modal-body-info">
                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                  </div>
                  <div>
                    <h1>Location</h1>
                    <p>Name: {location.name}</p>
                    <p>Dimension: {location.dimension}</p>
                    <p>Type: {location.type}</p>
                  </div>
                  <div>
                    <h1>Episode</h1>
                    <p>Name: {episode.name}</p>
                    <p>Episode: {episode.episode}</p>
                    <p>Air date: {episode.air_date}</p>
                  </div>
                </div>
              </div>
              <button className="close-modal" onClick={() => setModal(!modal)}>
                CLOSE
              </button>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Modal;
