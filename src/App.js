import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/sidebar';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('user', username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="main-content">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <Home onLogout={handleLogout} onToggleSidebar={toggleSidebar} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
