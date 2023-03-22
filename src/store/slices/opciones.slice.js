import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const opcionesSlice = createSlice({
  name: 'opciones',
  initialState: [],
  reducers: {
    setOpcionesGlobal: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        // eslint-disable-next-line no-param-reassign
        state[index] = action.payload;
      }
    },
  },
});

export const { setOpcionesGlobal } = opcionesSlice.actions;

export default opcionesSlice.reducer;
