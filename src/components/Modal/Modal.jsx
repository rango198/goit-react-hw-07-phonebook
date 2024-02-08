import { ModalContact } from './Modal.styled';

import { useDispatch } from 'react-redux';
import { delContactThunk } from 'components/fetchAPI';
import { BtnItem } from 'components/ContactsList/ContactsList.styled';

export const Modal = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };
  return (
    <ModalContact>
      <button type="button" onClick={onClose}>
        Close
      </button>
      <div>
        <img src={data.image} alt={data.name} />
        <div>Name:{data.name}</div>
        <div>Phone:{data.phone}</div>
        <div>Adderess:{data.address}</div>
        <BtnItem type="button" onClick={() => deleteContact(data.id)}>
          Delete
        </BtnItem>
      </div>
    </ModalContact>
  );
};
