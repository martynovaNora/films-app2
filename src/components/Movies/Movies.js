import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import store from '../Favorites/store/store';
import './Movies.css';


class Movies extends Component {
    state = {
        movie: []
    };
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            fetch(`http://www.omdbapi.com/?s=${state.searchLine}&apikey=4e4d9021`) // не выводятся другие фильмы
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    this.setState({movie: data.Search})
           
                }); 
                         
        });
    }
    render() { 
        return ( 
            <ul className="movies">
                {this.state.movie.map((movie, index)=> (
                    <li className="movies__item" key={index}>
                        <MovieItem {...movie} />
                    </li>
                ))}
                    
            </ul>
        );
    }
    
    
}
 
export default Movies;