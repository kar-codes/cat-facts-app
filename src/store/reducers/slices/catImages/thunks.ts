import { createAsyncThunk } from '@reduxjs/toolkit';

import { catImagesApi } from '../../../../api/catImages';

export const getCatImages = createAsyncThunk('cats/fetchCatImages', async (_, thunkAPI) => {
  const { data } = await catImagesApi.getCatImages();

  return data?.photos;
});
