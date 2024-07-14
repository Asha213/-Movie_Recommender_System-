import React from 'react';
import SingleMovies from '../components/SingleMovies';
import {gql,useQuery} from '@apollo/client';

const listallmovies = gql`
query{
    listMovies{
        name
        genre
        year
    }
}
`




const Movies = () => {
    const { loading, error, data } = useQuery(listallmovies)
console.log(data);
if (loading) return <p className='loading'>We are Loading your Moviess...</p>
  if (error) return <p className='error'>Cannot fetch Your movies! : {error.message}</p>;


    return (  
        <div className='movies'>
            {data.map((movie)=>{
                return <SingleMovies
                movieName={movie.name}
                movieGenre={movie.genre}
                movieYear={movie.year}
                />

            })}

        </div>


    );
}
 
export default Movies;
