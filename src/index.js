import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando a nova função createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Pegando o elemento root do HTML
const rootElement = document.getElementById('root');

// Criando o root usando createRoot
const root = createRoot(rootElement);

// Renderizando o componente App dentro do BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
