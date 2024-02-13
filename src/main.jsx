import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import EntradasCompradas from './componentes/EntradasCompradas.jsx';
import PeliculasFavoritas from './componentes/PeliculasFavoritas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/entradas-compradas" element={<EntradasCompradas />} />
        <Route path="/peliculas-favoritas" element={<PeliculasFavoritas />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
