import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Agregamos el nuevo reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer // Añadimos el nuevo reducer
  },
});
