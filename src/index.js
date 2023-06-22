import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Data = [
  {
    id: "todo-0",
    nome: "Comer",
    completa: true
  },
  {
    id: "todo-1",
    nome: "Dormir",
    completa: false
  },
  {
    id: "todo-2",
    nome: "Trabalhar",
    completa: true
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App task={Data} />
  </React.StrictMode>
);
