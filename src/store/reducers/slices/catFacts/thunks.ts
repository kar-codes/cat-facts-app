import { createAsyncThunk } from '@reduxjs/toolkit';

import { catFactsApi } from '../../../../api/catFacts';

export const getCatFacts = createAsyncThunk('users/fetchByIdStatus', async (_, thunkAPI) => {
  const { data } = await catFactsApi.getCatFacts();

  return data.fact;
});
