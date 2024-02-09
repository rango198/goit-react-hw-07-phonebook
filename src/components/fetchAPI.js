import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c123aedc74300bce8d6244.mockapi.io/api/contacts/contacts',
});

export const getContacts = () => contactsInstance.get('/');

export const delContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const postContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    name: data.name,
    phone: data.phone,
  });
};
