import { useState } from 'react';

function useModal(initialState = false) {
  const [showModal, setShowModal] = useState(initialState);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return { showModal, openModal, closeModal };
}

export default useModal;
