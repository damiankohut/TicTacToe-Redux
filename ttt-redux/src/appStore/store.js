import { configureStore } from '@reduxjs/toolkit';
import tttReducer from '../feature/ttt-slice'

export default configureStore({
  reducer: {
    ttt: tttReducer
  }
});
