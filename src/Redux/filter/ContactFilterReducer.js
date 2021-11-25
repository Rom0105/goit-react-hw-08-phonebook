import { createReducer } from '@reduxjs/toolkit';

import { changeFilter } from './ContactFilterActions';

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
