import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
    // Logica para mi formulario
    // Aca trae la informacion del formulario y los guardamos
    const [form, setValues] = useState({
        email: '',
    });

    // En esta arrow function podemos pasar el valor en lugar de los parentesis, por que es un solo valor (event)
    const handleInput = event => {
        setValues ({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    //  funcion que envia o transmite los datos capturados a donde queremos
    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <section className="login">
            <section className="login__container">
                <h2 tabindex="0">Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                        aria-label="Correo" 
                        name="email"
                        className="input" 
                        placeholder="Correo" 
                        type="text" 
                        onChange={handleInput}
                    />
                    <input 
                        aria-label="Contraseña" 
                        name="password"
                        className="input" 
                        placeholder="Contraseña" 
                        type="password"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar Sesión</button>
                    <div className="login__container-remember-me">
                        <label>
                            <input type="checkbox" id="box1" value="checkbox" />Recuérdame
                        </label>
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="google" />Inicia sesión con Google</div>
                    <div><img src={twitterIcon} alt="twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta 
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
    loginRequest ,
};

export default connect(null, mapDispatchToProps)(Login);