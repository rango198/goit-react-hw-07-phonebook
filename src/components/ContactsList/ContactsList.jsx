import { BtnItem, List, ListItem } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { delContactThunk, getContactsThunk } from 'components/redux/options';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectPhoneBookValue,
} from 'components/redux/selects';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const phoneBook = useSelector(selectPhoneBookValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  const setModalData = id => {
    const selectContact = phoneBook.find(contact => contact.id === id);
    setSelectedContact(selectContact);
  };

  return (
    <>
      {isLoading && phoneBook?.length === 0 && <Loader />}
      {!error && !isLoading && visibleContacts?.length > 0 && (
        <List>
          {visibleContacts.map(({ name, phone, id }) => {
            return (
              <ListItem key={id}>
                <span onClick={() => setModalData(id)}>{name}:</span>
                <span>{phone}</span>
                <BtnItem type="button" onClick={() => deleteContact(id)}>
                  Delete
                </BtnItem>
              </ListItem>
            );
          })}
        </List>
      )}

      {selectedContact && <Modal data={selectedContact} onClose={closeModal} />}
    </>
  );
};
