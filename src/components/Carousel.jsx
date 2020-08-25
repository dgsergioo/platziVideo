import React from 'react';

//  Importamos los estilos de css con su respetiva extension
import '../assets/styles/components/Carousel.scss';


const Carousel = ({ children }) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
);

export default Carousel;