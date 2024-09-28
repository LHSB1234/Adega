import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de login simples com validação
    if (!usuario || !senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Simulação de login bem-sucedido
    localStorage.setItem('user', usuario);  // Corrigido para usar 'user'
    
    alert(`Bem-vindo, ${usuario}!`);
    onLogin(usuario);  // Chama a função de login para atualizar o estado do App
    navigate('./Home/Home'); // Redireciona para a página do header
  };

  return (
    <div className='formulario'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='nome'>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className='senha'>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
};

export default Login;
