import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState({
        mylist: [],
        trends: [],
        originals: []
    });

    //  En esta parte creamos la parte que nos va a traer el API
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
};

export default useInitialState;