import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''} ${!isOpen ? 'sidebar-close' : ''}`}>
      <h2>Categorias</h2>
      <ul>
        <li onClick={() => alert('Vinhos selecionados')}>
          Vinhos
          <ul>
            <li>Vinho Tinto</li>
            <li>Vinho Branco</li>
            <li>Vinho Rosé</li>
          </ul>
        </li>
        <li onClick={() => alert('Cervejas selecionadas')}>
          Cervejas
          <ul>
            <li>Cervejas Artesanais</li>
            <li>Cervejas Importadas</li>
            <li>Cervejas Nacionais</li>
          </ul>
        </li>
        <li onClick={() => alert('Destilados selecionados')}>
          Destilados
          <ul>
            <li>Whisky</li>
            <li>Vodka</li>
            <li>Gin</li>
          </ul>
        </li>
        <li onClick={() => alert('Não Alcoólicos selecionados')}>
          Não Alcoólicos
          <ul>
            <li>Refrigerantes</li>
            <li>Águas</li>
            <li>Sucos</li>
          </ul>
        </li>
      </ul>
            <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Sidebar;
