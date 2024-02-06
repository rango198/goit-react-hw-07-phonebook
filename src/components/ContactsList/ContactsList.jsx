import { AiOutlineUserDelete } from 'react-icons/ai';
import { BtnItem, List, ListItem } from './ContactsList.styled';
import { deleteContact } from 'components/redux/contacts-slice';
import { getFilteredContacts } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const ondeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnItem type="button" onClick={() => ondeleteContact(id)}>
              <AiOutlineUserDelete />
              Delete
            </BtnItem>
          </ListItem>
        );
      })}
    </List>
  );
};
