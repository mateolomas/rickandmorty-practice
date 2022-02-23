import { useState } from "react";
import CharacterCard from './CharacterCard';
import { SingleCharacter, AllInfo } from '../interfaces/types';
import "../styles/modal.css"

function Modal(props: AllInfo): JSX.Element {

  const [modal, setModal] = useState<Boolean>(false);

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <>

        <button
          className="btn-modal"
          onClick={() => { setModal(!modal) }}
        >
          Open
        </button>
      

      { modal && (
        <div className="modal">
          <div onClick={() => setModal(!modal)} className="overlay"></div>
          <div className="modal-content">
            <div>
            <h1>  Hlasduas</h1>
            <p>{props.character.name}</p>
            <p>{props.episode?.episode}</p>

            
          </div>
            <button className="close-modal" onClick={() =>setModal(!modal)}>
              CLOSE
            </button>
          </div>
        </div>)
      }

    </>




  )
}

export default Modal