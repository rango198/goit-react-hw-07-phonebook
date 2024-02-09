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

export const Modal = ({ data, onClose }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
    onClose();
  };
  return (
    <ModalContact>
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
