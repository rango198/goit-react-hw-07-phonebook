import { AiOutlineUserDelete } from 'react-icons/ai';
import { BtnItem, List, ListItem } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPhoneBookValue } from 'components/redux/contacts-slice';
import { getFilter } from 'components/redux/filter-slice';
import { delContactThunk, getContactsThunk } from 'components/fetchAPI';

export const ContactsList = () => {
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

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnItem type="button" onClick={() => deleteContact(id)}>
              <AiOutlineUserDelete />
              Delete
            </BtnItem>
          </ListItem>
        );
      })}
    </List>
  );
};
