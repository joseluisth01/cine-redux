import React from 'react';
import { useSelector } from 'react-redux';

const EntradasCompradas = () => {
    const purchasedTickets = useSelector(state => state.movies.purchasedTickets);

    return (
        <div>
            <h2>Entradas Compradas</h2>
            {purchasedTickets.length > 0 ? (
                <ul>
                    {purchasedTickets.map((ticket, index) => (
                        <li key={index}>
                            <p>Película: {ticket.pelicula}</p>
                            <p>Nombre: {ticket.nombre}</p>
                            <p>Email: {ticket.email}</p>
                            <p>Cantidad: {ticket.cantidad}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay entradas compradas</p>
            )}
        </div>
    );
}

export default EntradasCompradas;
