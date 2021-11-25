import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from './filter/ContactFilterSelectors';

export const getContacts = state => state.contacts.items;

export const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
