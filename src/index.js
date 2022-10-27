import React from 'react';
import ReactDOM from 'react-dom/client';

import{Componente1}from'./Componente1/Componente.js'

import{Diego}from'./Diego/Diego.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Componente1></Componente1>
    <Diego></Diego>
    
  </React.StrictMode>
);


