import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './ListPage.css';



class ListPage extends Component {
    state = {
        movies: [{ imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }],
        title: "Мой список",
        id: "",
        imdbID: "",
    }
    
    componentDidMount() {
         const data= this.props.match.params;
            console.log(data); 
            fetch(`https://acb-api.algoritmika.org/api/movies/list/${data.id}`)
                .then(res => res.json())
                .then((data) => {
                console.log(data);
                this.setState({id: data.id,
                               id: data.movies,
                               id: data.title})
                console.log(data)
                })
                
        };
        
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
  
    render() { 
        const { title, movies } = this.state;
        console.log(title, movies);
        if (title, movies !== null) {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((movies) => {
                        return (
                            <li key={movies.id}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank"> {movies.title}({movies.year}) </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )};
    }
}
 
export default ListPage;