import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';
import { ContactsForm } from './Form/ContactsForm';
import {
  BackgroundColor,
  ContactsWrap,
  Container,
  PhoneWrap,
} from './App.styled';
// import { Error } from './Error/Error';
// import { useSelector } from 'react-redux';
// import { Loader } from './Loader/Loader';
// import { selectError, selectIsLoading } from './redux/selects';

export const App = () => {
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
          <ContactsList />
        </ContactsWrap>
        <ToastContainer />
      </Container>
    </BackgroundColor>
  );
};
