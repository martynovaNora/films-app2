import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Favorites.css';
import store from './store/store';

class Favorites extends Component {
    state = {
        movies: [],
        id: "",
        id: null,
        value: "",
        title: "Мой список"
    };
       
    deleteMovie (imdbID) {
        store.dispatch({
            type: 'DELETE_MOVIES_FAVORITES',
            payload: {
                imdbID: imdbID
               
            }
            
        })   
                                           
    };
   
    componentDidMount(){
        store.subscribe(() => {
            const state = store.getState();
            this.setState({ 
            movies: state.favorites
            });
        });
        console.log( this.setState);
        
    }
    handleClick() {
        let data = {title: "Мой список", movies: []};
            this.state.movies.forEach(element => {
                data.movies.push(element.imdbID);
            }); 
            console.log(data);
        fetch("https://acb-api.algoritmika.org/api/movies/list/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            this.setState({id: data.id});
       });
              
    }; 
    render() {
        const {id} = this.state;
        if (id !== null) {
      return (
        <div className="favorites">
        <input value={this.state.value} onChange={this.showInput} className="favorites__name" placeholder="Введите название списка"/>
            <Link to={`/list/${id}`} type="button" className="favorites__save">Перейти к списку</Link>
        </div>);
    }
        return (
            <div className="favorites">
                <input value={this.state.value} onChange={this.showInput} className="favorites__name" placeholder="Введите название списка"/>
                <ul className="favorites__list">
                    {this.state.movies.map((item, index) => {
                        return <li key={index}>{item.Title} ({item.Year}) <button onClick={() => this.deleteMovie(item.imdbID)} className='deleteMovie'>X</button></li>;
                    })}
                </ul> 
                <button onClick={() => this.handleClick()}>Сохранить список</button> 
            </div>
        );
    }
}
 
export default Favorites;

//условный рендеринг если есть id рисую кнопку
// рисовать либо кнопку, либо ссылку
// из url id get запрос и отрисовать список