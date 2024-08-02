// mySlice.ts

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface TNote {
  idNumber: string;
  description: string;
  date: string;
  color: string;
}

const initialState: {noteList: TNote[]} = {
  noteList: [],
};

const noteSlice = createSlice({
  name: 'note',
  initialState: initialState,
  reducers: {
    setNewNote: (state, action: PayloadAction<TNote>) => {
      state.noteList = [...state.noteList, action.payload];
    },
    setUpdateNote: (state, action: PayloadAction<TNote[]>) => {
      state.noteList = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setNewNote, setUpdateNote} = noteSlice.actions;
export default noteSlice.reducer;



