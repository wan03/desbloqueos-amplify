import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const opcionesSlice = createSlice({
  name: 'opciones',
  initialState: ['hola'],
  reducers: {
    setOpcionesGlobal: (state, action) => action.payload,
  },
});

export const { setOpcionesGlobal } = opcionesSlice.actions;

export default opcionesSlice.reducer;
