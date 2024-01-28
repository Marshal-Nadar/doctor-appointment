import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Features/doctorSlice'; // Adjust the path accordingly

export default configureStore({
  reducer: {
    doctors: rootReducer,
  },
});
