import { delContactThunk } from 'components/redux/options';
import {
  ButtonClose,
  ButtonDelete,
  IMG,
  ModalContact,
  TextAdderess,
  TextName,
  TextPhone,
  WrapDiv,
} from './Modal.styled';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Modal = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
    onClose();
  };
  const closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <ModalContact onClick={closeModal}>
      <ButtonClose type="button" onClick={onClose}>
        Close
      </ButtonClose>
      <WrapDiv>
        <IMG src={data.image} alt={data.name} />
        <div>
          <TextName>Name:{data.name}</TextName>
          <TextPhone>Phone:{data.phone}</TextPhone>
          <TextAdderess>Adderess:{data.address}</TextAdderess>
        </div>
      </WrapDiv>
      <ButtonDelete type="button" onClick={() => deleteContact(data.id)}>
        Delete
      </ButtonDelete>
    </ModalContact>
  );
};
