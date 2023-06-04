export interface CatFactsState {
  data?: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const initialState: CatFactsState = {
  data: undefined,
  status: 'idle',
};
