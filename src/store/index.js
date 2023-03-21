import { configureStore } from '@reduxjs/toolkit';
import opciones from './slices/opciones.slice';

export default configureStore({
  reducer: {
    opciones,
  },
});
