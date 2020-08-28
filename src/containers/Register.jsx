import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss'; 

const Register = () => (
<section className="login">
    <section className="login__container">
        <h2 tabindex="0">Regístrate</h2>
        <form className="login__container--form">
            <input aria-label="nombre" className="input" placeholder="Nombre" type="text" />
            <input aria-label="Correo" className="input" placeholder="Correo" type="text" />
            <input aria-label="Contraseña" className="input" placeholder="Contraseña" type="password" />
            <button className="button">Registrarme</button>                
        </form>        
        <Link to="/login">
            Iniciar Sesíon
        </Link>    
        
    </section>
</section>
);

export default Register;