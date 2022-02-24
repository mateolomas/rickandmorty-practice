import { useState, useEffect } from 'react';
import { AllInfo } from '../interfaces/types';
import "../styles/modal.css"
import useFetchAllInfoById from '../hooks/useFetchAllInfo';

function Modal({ character }: AllInfo): JSX.Element {


  const [idCharacter, setIdCharacter] = useState<number>(1);
  const [characterData, setCharacterData] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    image: "",
  });
  const [locationData, setLocationData] = useState({
    name: "",
    type: "",
    dimension: "",
  });
  const [episodeData, setEpisodeData] = useState({
    name: "",
    air_date: "",
    episode: "",
  });


  const characterByID = useFetchAllInfoById(idCharacter);


  useEffect(() => {

    characterByID.then(data => {

      setCharacterData(data?.character);
      setLocationData(data?.location);
      setEpisodeData(data?.episode);

    })

  }, [idCharacter]);


  const [modal, setModal] = useState<Boolean>(false);
  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
  return (
    <>
      <div className="modal-container">
        <button className="btn-modal" onClick={() => { setModal(!modal); setIdCharacter(character.id) }}>
          More information
        </button>
        {modal &&
          (
            <div className="modal">
              <div onClick={() => setModal(!modal)} className="overlay"></div>
              <div className="modal-content">
                <div className="modal-wrapper">
                  <div className="modal-header">
                    <img src={characterData.image} alt={characterData.name} />
                  </div>
                  <div className="modal-body">
                    <div className="modal-body-info">
                      <h1>{characterData.name}</h1>
                      <p>Status: {characterData.status}</p>
                      <p>Species: {characterData.species}</p>
                    </div>

                    <div>
                      <h1>Location</h1>
                      <p>Name: {locationData.name}</p>
                      <p>Dimension: {locationData.dimension}</p>
                      <p>Type: {locationData.type}</p>
                    </div>


                    <div>
                      <h1>Episode</h1>
                      <p>Name: {episodeData.name}</p>
                      <p>Episode: {episodeData.episode}</p>
                      <p>Air date: {episodeData.air_date}</p>
                    </div>



                  </div>




                </div>


                <button className="close-modal" onClick={() => setModal(!modal)}>
                  CLOSE
                </button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Modal