import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./Queries";

const Home = () => <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
          if (loading) return <span>loading</span>;
          if (error) return <span>error</span>;
          return data.movies.map(movie => <h2 key={movie.id}>{movie.id} : {movie.name} / {movie.score}</h2>)
        }}
</Query>

export default Home;