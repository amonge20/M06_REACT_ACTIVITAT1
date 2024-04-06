import React, { useState } from "react";
import '../../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '' 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Login">
      <h1>Login: INICIA SESION</h1>
      <form onSubmit={handleSubmit}>
        <div className="Correo">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="Contraseña">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>  
  );
};

export default Login;