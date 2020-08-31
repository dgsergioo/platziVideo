import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss'; 

const Register = () => {
    // LOGICA
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);

    }

    return (
        <section className="login">
            <section className="login__container">
                <h2 tabindex="0">Regístrate</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        aria-label="nombre" 
                        className="input" 
                        placeholder="Nombre" 
                        type="text" 
                        onChange={handleInput}
                    />

                    <input 
                        name="email"
                        aria-label="Correo" 
                        className="input" 
                        placeholder="Correo" 
                        type="text"
                        onchange={handleInput}
                    />

                    <input 
                        name="password"
                        aria-label="Contraseña" 
                        className="input" 
                        placeholder="Contraseña" 
                        type="password" 
                        onchage={handleInput}
                    />

                    <button className="button">Registrarme</button>                
                </form>        
                <Link to="/login">
                    Iniciar Sesíon
                </Link>    
                
            </section>
        </section>
    );
};

export default Register;