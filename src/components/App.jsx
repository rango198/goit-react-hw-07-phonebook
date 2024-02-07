import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';
import { ContactsForm } from './Form/ContactsForm';
import {
  BackgroundColor,
  ContactsWrap,
  Container,
  PhoneWrap,
} from './App.styled';
import { Error } from './Error/Error';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from './redux/contacts-slice';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <BackgroundColor>
      <Container>
        <PhoneWrap>
          <h1>Phonebook</h1>
          <ContactsForm />
        </PhoneWrap>
        <ContactsWrap>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <Loader />}
          {error ? <Error /> : <ContactsList />}
        </ContactsWrap>
      </Container>
    </BackgroundColor>
  );
};
