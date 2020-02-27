import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {
    const [movies, setMovies] = useState ([
 {
     name: 'harrry potter',
     price: '10£',
     id: '23124'

 },
{
    name: 'Stars wars',
    price: '10$',
    id: '23124'

},
{
    name: 'Matrix',
    price: '10£',
    id: '23124'

}

    ]);

    return(
        <div>
        {movies.map(movie => (
            <div>
            <Movie name={movie.name} price={movie.price} id={movie.id}></Movie>

            </div>

        ))}
        </div>

);
}

export default MovieList;
