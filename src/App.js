import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {};

  // 요녀석은 가벼운 것이 좋다. 많은 일을 해야 하기 때문에. 그래서 함수를 쪼갰다.
  componentDidMount() {
    this._getMovies();
  }

  async _getMovies() {  // async 비동기 함수
    const movies = await this._callApi();  // await: 비동기 함수의 종료를 기다린다. 성공 여부는 상관없다.
    this.setState({movies})  // movies: movies 가 된다.
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')  // 반환해줘야 한다.
      .then(response => response.json())
      .then(jsonData => jsonData.data.movies)  // 요 값을 반환
      .catch(err => console.log(err))
  };

  _renderMovies = () => {
    return this.state.movies.map(movie => {
      // movie 객체를 내가 만든 것이 아니므로, Api json data 형태를 잘 보고 사용해줘야 한다.
      // key 로 영화의 id 값을 사용할 수 있다. 인덱스를 사용하는 것 보다 빠르다고? 한다
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id}/>
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
