interface CatPhoto {
  url: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    original: string;
    portrait: string;
  };
}

export interface CatImagesState {
  data?: CatPhoto[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const initialState: CatImagesState = {
  data: undefined,
  status: 'idle',
};
