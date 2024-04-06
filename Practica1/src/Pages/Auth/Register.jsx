import React, { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmada: ''
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
    <div className="Registro">
      <h1>Register: Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div className="Correo">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="Contraseña">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="ContraseñaConfirmada">
          <label htmlFor="passwordConfirmada">Confirmar Contraseña:</label>
          <input type="password" id="passwordConfirmada" name="passwordConfirmada" value={formData.passwordConfirmada} onChange={handleInputChange} required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>  
  );
};

export default Register;
