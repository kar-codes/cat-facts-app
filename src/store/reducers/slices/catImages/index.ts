import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './state';
import { getCatImages } from './thunks';

const catImagesSlice = createSlice({
  name: 'catImages',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(getCatImages.rejected, (state) => {
      state.status = 'failed';
      state.data = undefined;
    });

    builder.addCase(getCatImages.pending, (state) => {
      state.status = 'pending';
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCatImages.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default catImagesSlice.reducer;
