import { FaPhoneAlt } from 'react-icons/fa';
import { GiGingerbreadMan } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  BtnPhone,
  ErrorText,
  FieldInput,
  Formstyled,
  Label,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts-slice';
import { getFilteredContacts } from 'components/redux/selectors';
import { Notify } from 'notiflix';

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'the name is not entered correctly'
    )
    .required(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'the number is not entered correctly, parentheses and can start with +'
    )
    .required(),
});

export const ContactsForm = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const addContacts = newContact => {
    const isContactsExist = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    );
    if (isContactsExist) {
      Notify.warning(`${newContact.name}: is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
    } else {
      const action = addContact(newContact);
      dispatch(action);
    }
  };

  return (
    <div>
      <Formik
        onSubmit={(values, { resetForm }) => {
          addContacts({ id: nanoid(), ...values });
          resetForm();
        }}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <Formstyled autoComplete="off">
          <Label>
            <div>
              <GiGingerbreadMan /> Name
            </div>
          </Label>
          <FieldInput name="name" type="text" />
          <FormError name="name" component="span" />

          <Label>
            <div>
              <FaPhoneAlt /> Number
            </div>
          </Label>
          <FieldInput name="number" type="tel" />
          <FormError name="number" component="span" />

          <BtnPhone type="submit">
            Add contact <AiOutlineUserAdd />
          </BtnPhone>
        </Formstyled>
      </Formik>
    </div>
  );
};
