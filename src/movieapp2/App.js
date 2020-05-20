import React from 'react';
import axios from 'axios';
import Movie from './Movie';
/*
 data 에 fetch하기
 axios

 https://yts-proxy.now.sh/list_movie.json

 */
class App extends React.Component {
 state = {
   isLoading: true,
   movie: []
 }
getMovies = async() => { //비동기 함수. 기다리라 명령
  //axios는 처리속도가 느리기때문에 js에 componentDidMount 함수가 끝날때까지 기다려야한다
  //const movies.data.data.movies
  const {data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  // this.setState({movies:movies});
  this.setState({movies, isLoading: false});
}

 componentDidMount(){
   this.getMovies();
 }

render(){
  const {isLoading, movies} = this.state;
  return (
    <section className="container">
      {isLoading 
      ? <div className="loader">
          <span className="loader_text">Loading...</span>
      </div> 
      :( <div className="movies">
           {
              movies.map(movie => {
                console.log(movie);
                return <Movie
                key={movie.id} 
                id={movie.year} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
              })
           } 
      </div>
    )}
    </section>
    )
  }


}

      


export default App;
