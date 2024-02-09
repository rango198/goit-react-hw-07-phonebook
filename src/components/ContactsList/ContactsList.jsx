import { BtnItem, List, ListItem } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { delContactThunk, getContactsThunk } from 'components/redux/options';
import { selectFilter, selectPhoneBookValue } from 'components/redux/selects';

export const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(selectPhoneBookValue);

  const filterPhoneBook = useSelector(selectFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  // visibleContacts;

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
      {selectedContact && <Modal data={selectedContact} onClose={closeModal} />}
    </>
  );
};
