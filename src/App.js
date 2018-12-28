import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: 'Inception',
            poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_french_original_film_art_spo_2000x.jpg?v=1543425422',
          },

          {
            title: 'Transcendence',
            poster: 'https://i.pinimg.com/originals/42/56/6d/42566daff7cfe843d51780e73802a83c.jpg',
          },

          {
            title: 'Interstellar',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
          },

          {
            title: 'Catch me if you can',
            poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/catch_me_if_you_can_2002_original_film_art_spo_2000x.jpg?v=1543418719',
          },
          {
            title: 'Borne Identity',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
          },
        ]
      })
    }, 3000);
  }

  _renderMovies = () => {
    return this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello, <br/>Daniel Kim.
          </h1>
          {this.state.movies ? this._renderMovies() : 'Loading...'}
        </header>
      </div>
    );
  }
}


export default App;
