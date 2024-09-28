import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';

const Home = ({ onLogout, onToggleSidebar }) => {
  return (
    <div>
      <Header onLogout={onLogout} onToggleSidebar={onToggleSidebar} />
      <main>
        <h1>Adega Copão de 5</h1>
        <br></br>
        <h2 className='Catalago'>Catalago: <p>Escolha sua bebida</p></h2>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
