import React from 'react';

//  Importamos los estilos del css
import '../assets/styles/components/Categories.scss'

//  Title funciona como parametro y recibe un nombre que se le de
const Categories = ({ children, title }) => (
    <div className="categories">
        <h2 className="categories__title">{title}</h2>
        {children}
    </div>
);

export default Categories;