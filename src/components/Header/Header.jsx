import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = ({ onLogout, onToggleSidebar }) => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => onToggleSidebar()}
        style={{ cursor: 'pointer' }}
      />
      <input
        type="text"
        placeholder="Pesquisar..."
        className="search-bar"
      />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#carrinho">Carrinho</a></li>
          <li><button onClick={onLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
