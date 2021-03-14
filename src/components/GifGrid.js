import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const {loading,data} = useFetchGifs(category);
    
    return (
        <div>
            <h3>{category}</h3>
            {loading && <p> Cargando...</p>}
            <ol className='card-container'>
                {
                    data.map(image => <GifGridItem key={image.id} {...image} />)
                }
            </ol>
        </div>
    );
};
