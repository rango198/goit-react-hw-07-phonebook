import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://65c123aedc74300bce8d6244.mockapi.io/api/contacts/contacts';

const getContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postContact = async (newContact, thunkAPI) => {
  try {
    const response = await axios.post(URL, newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delContact = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`${URL}/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  getContacts
);

export const postContactThunk = createAsyncThunk(
  'phoneBook/postContact',
  postContact
);

export const delContactThunk = createAsyncThunk(
  'phoneBook/delContact',
  delContact
);
