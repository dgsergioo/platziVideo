import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//  Arriba se hizo la importacion de todos los componentes .jsx que creamos, ademas del css

//  La direccion de la API
// const API = 'http://localhost:3000/initalState';

//  Dentro del div van ubicados a gusto los componentes
const Home = ({ myList, trends, originals }) => {

    // const initialState = useInitialState(API);

return (
    <>
        
        <Search />

        {/* Dentro del title va un titulo que damos, que es el parametro que llegara a title de Categories.jsx */}
        {/*  Aca tenemos una condicion y si no contiene nada, no imprime */}
        {myList.length > 0 && 
            <Categories title="Mi lista">
                <Carousel>
                    {myList.map(item =>
                        <CarouselItem 
                            key={item.id}
                            {...item} 
                            isList 
                        />
                    )}
                </Carousel>
            </Categories>
        }

        {/* Aca le decimos que nos imprima, recorriendo todo con el .map */}
        <Categories title="Tendencias">
            <Carousel>
                {trends.map(item =>
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales de platzi video">
            <Carousel>
                {originals.map(item =>
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>

    </>
    );
}

// aca solo ponemos los elementos que solo vamos a usar
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals:state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);