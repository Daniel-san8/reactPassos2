import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        Esse é o modal.
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          Fechar
        </button>
      </div>
    );
};

export default Modal;
