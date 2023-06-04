import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './state';
import { getCatFacts } from './thunks';

const catFactsSlice = createSlice({
  name: 'catFacts',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(getCatFacts.rejected, (state) => {
      state.status = 'failed';
      state.data = undefined;
    });

    builder.addCase(getCatFacts.pending, (state) => {
      state.status = 'pending';
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCatFacts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default catFactsSlice.reducer;
