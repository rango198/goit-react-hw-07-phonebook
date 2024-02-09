import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  delContact,
  editContact,
  getContacts,
  postContact,
} from 'components/fetchAPI';

import { toast } from 'react-toastify';

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContacts();

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(
        `Ooops! Wrong... Try again or update browser`
      );
    }
  }
);

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await postContact(data);

      toast.success('Add contact', {
        position: 'bottom-right',
      });
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      console.log(name, phone);
      const { phoneBook } = getState();

      const normalizedName = name.toLowerCase();
      const normalizedPhone = phone.trim();

      const dublicate = phoneBook.contacts.find(contact => {
        const normalizedCurrentName = contact.name.toLowerCase();
        const normalizedCurrentPhone = contact.phone.trim();
        return (
          normalizedCurrentName === normalizedName &&
          normalizedCurrentPhone === normalizedPhone
        );
      });

      if (dublicate) {
        toast.error(`This contact is already in contacts`);
        return false;
      }
    },
  }
);

export const delContactThunk = createAsyncThunk(
  'phoneBook/delContact',
  async (id, { rejectWithValue }) => {
    try {
      await delContact(id);
      toast.success('Contact delete', {
        position: 'bottom-right',
      });
      return id;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await editContact(data);
      toast.success('Contact update', {
        position: 'bottom-right',
      });
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
