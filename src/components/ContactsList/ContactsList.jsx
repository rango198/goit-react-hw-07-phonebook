import { BtnItem, List, ListItem } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPhoneBookValue } from 'components/redux/contacts-slice';
import { getFilter } from 'components/redux/filter-slice';
import { delContactThunk, getContactsThunk } from 'components/fetchAPI';
import { Modal } from 'components/Modal/Modal';

export const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(getPhoneBookValue);

  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );
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
            <ListItem key={id} onClick={() => setModalData(id)}>
              <span>{name}:</span>
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
