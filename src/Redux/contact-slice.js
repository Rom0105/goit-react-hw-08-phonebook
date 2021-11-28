import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);

    return contactId;
  },
);
