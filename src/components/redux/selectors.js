import { createSelector } from 'reselect';

export const getAllContacts = store => store.contacts;

export const getFilteredContacts = createSelector(
  state => state.contacts,
  state => state.filter,
  (contacts, filter) => {
    const lowerFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  }
);
