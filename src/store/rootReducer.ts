// rootReducer.ts

import {combineReducers} from '@reduxjs/toolkit';
import noteSlice from './slices/noteSlice';

const rootReducer = combineReducers({
  note: noteSlice,

});

export default rootReducer;
