import React, { useState } from "react";
import "./Modal.css";
 

const ModalSection = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perfe olestiae rem aspernatur dicta tenetur. Sunt placeat tempora
              vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti d usdam tenetur ducimus,
        officiis autem ratione modi cum em, aliquam saepe d iae.
      </p>
    </>
  )
}

export default ModalSection

 