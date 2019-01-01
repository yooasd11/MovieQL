let movies = [
    {
        id: 0,
        name: 'Harry Potter',
        score: 5,
    },
    {
        id: 1,
        name: 'Lord of the Rings',
        score: 5,
    },
    {
        id: 2,
        name: 'Matrix',
        score: 5,
    },
    {
        id: 3,
        name: 'The Godfather',
        score: 5,
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    return false;
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};