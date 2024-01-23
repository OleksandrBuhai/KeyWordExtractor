import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';


interface KeywordsState {
  value: string;
  loading: boolean;
  modalOpen: boolean;
}

const initialState: KeywordsState = {
  value: '',
  loading: false,
  modalOpen: false,
};

const keywordsSlice = createSlice({
  name: 'keywords',
  initialState,
  reducers: {
    setKeywords: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload
    },
  },
});

export const { setKeywords, setLoading, setModalOpen } = keywordsSlice.actions
export const selectKeywords = (state: RootState) => state.keywords
export const keyWordsReducer =  keywordsSlice.reducer
