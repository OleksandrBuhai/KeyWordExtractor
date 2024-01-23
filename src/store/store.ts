import { configureStore } from '@reduxjs/toolkit';
import { keyWordsReducer } from '../slices/keywordsSlice';


export const store = configureStore({
  reducer: {
    
    keywords: keyWordsReducer,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
