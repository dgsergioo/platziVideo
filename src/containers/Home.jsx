import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//  Arriba se hizo la importacion de todos los componentes .jsx que creamos, ademas del css

//  La direccion de la API
const API = 'http://localhost:3000/initalState';

//  Dentro del div van ubicados a gusto los componentes
const Home = () => {

    const initialState = useInitialState(API);

return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
        <Header />
        <Search />

        {/* Dentro del title va un titulo que damos, que es el parametro que llegara a title de Categories.jsx */}
        {/*  Aca tenemos una condicion y si no contiene nada, no imprime */}
        {initialState.mylist.length > 0 && 
            <Categories title="Mi lista">
                <Carousel>
                    {initialState.mylist.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
        }

        {/* Aca le decimos que nos imprima, recorriendo todo con el .map */}
        <Categories title="Tendencias">
            <Carousel>
                {initialState.trends.map(item =>
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales de platzi video">
            <Carousel>
                {initialState.originals.map(item =>
                    <CarouselItem key={item.id} {...item} />
                )}
            </Carousel>
        </Categories>

        <Footer />

    </div>
    );
}

export default Home;