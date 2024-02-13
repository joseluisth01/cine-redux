import React from 'react';
import { useSelector } from 'react-redux';

const PeliculasFavoritas = () => {
    const favorites = useSelector(state => state.movies.favorites);

    return (
        <div>
            <h2>Películas Favoritas</h2>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favorite, index) => (
                        <li key={index}>{favorite}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay películas marcadas como favoritas</p>
            )}
        </div>
    );
}

export default PeliculasFavoritas;
