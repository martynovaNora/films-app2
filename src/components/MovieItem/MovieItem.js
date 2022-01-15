import React, { Component } from 'react';
import store from '../Favorites/store/store';
import './MovieItem.css';


class MovieItem extends Component {
    addToListHandler = (Title, Year, Poster,imdbID) => {
        store.dispatch({
          type: 'ADD_GOOD_TO_LIST',
          payload: {
            imdbID: imdbID,
            Title: Title,
            Year: Year,
            Poster: Poster
          }
        })
      }
       render() {
        const { Title, Year, Poster, imdbID } = this.props;
  
        return (
            <article className="movie-item" key = {imdbID}>
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button onClick={() => this.addToListHandler(Title, Year, Poster, imdbID)} type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}

 
export default MovieItem;