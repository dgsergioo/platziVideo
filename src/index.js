import React from 'react';
import ReactDom from 'react-dom';

//  Importamos el .jsx que contiene todos los componentes
import App from './routes/app';

//  Aca es donde enviamos el componente que se mostrara en la web
ReactDom.render(<App />, document.getElementById('app'));


