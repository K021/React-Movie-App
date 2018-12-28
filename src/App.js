import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {};

  // movie: [
  //   description_full: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain."
  //   genres: ["Action", "Adventure", "Drama", "Fantasy", "Sci-Fi"]
  //   id: 8462
  //   large_cover_image: "https://yts.am/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg"
  //   medium_cover_image: "https://yts.am/assets/images/movies/avengers_infinity_war_2018/medium-cover.jpg"
  //   rating: 8.5
  //   runtime: 149
  //   slug: "avengers-infinity-war-2018"
  //   small_cover_image: "https://yts.am/assets/images/movies/avengers_infinity_war_2018/small-cover.jpg"
  //   summary: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain."
  //   synopsis: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain."
  //   title: "Avengers: Infinity War"
  //   title_english: "Avengers: Infinity War"
  //   title_long: "Avengers: Infinity War (2018)"
  //   year: 2018
  //   torrents: [
  //     {
  //       date_uploaded: "2018-08-18 18:46:19"
  //       date_uploaded_unix: 1534610779
  //       hash: "16B087DFF9C8153072BD35C1BEC245CB831AEF4D"
  //       peers: 36
  //       quality: "3D"
  //       seeds: 280
  //       size: "2.39 GB"
  //       size_bytes: 2566242959
  //       type: "bluray"
  //       url: "https://yts.am/torrent/download/16B087DFF9C8153072BD35C1BEC245CB831AEF4D"
  //     },
  //     ...
  //   ]
  // ]

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
    console.log(this.state.movies);
    return this.state.movies.map(movie => {
      // movie 객체를 내가 만든 것이 아니므로, Api json data 형태를 잘 보고 사용해줘야 한다.
      // key 로 영화의 id 값을 사용할 수 있다. 인덱스를 사용하는 것 보다 빠르다고? 한다
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    });
  };

  render() {
    const {movies} = this.state;
    return (
      <div>
        <h1 className={'TopHeader'}>
          Hello, <br/>Daniel Kim.
        </h1>
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading...'}
        </div>
      </div>
    );
  }
}


export default App;
