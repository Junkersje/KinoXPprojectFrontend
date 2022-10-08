'use strict'
console.log("hej");
class MOVIE {
    movieurlData = 'http://localhost:8080/api/v1/movies';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    async fetchData(){
        let response = await fetch(this.movieurlData);
        this.data = await response.json();
        this.showUI();
        this.setMovieData(0);
    };

    showUI(){
        $('#movie').text(this.data.movie);
    }

    setMovieData(index) {
        let entry = this.data[index];
        $("#movie-id").text(entry.id);
        $("#movie-title").text(entry.title);
        $("#movie-movieGenre").text(entry.movieGenre);
        $("#movie-playTime").text(entry.playTime);
        $("#movie-pgrating").text(entry.pgrating);
        $("#movie-date").text(entry.date);
        $("#movie-data").show();
    }
}
var movie = new MOVIE();
//array med movies
async function loadMovies() {
    const response = await fetch('/api/v1/movies');
    const movies = await response.json();
    for(let movie of movies) {
        <div class="col"><a href=""><img class="img-fluid" src=movie.imgURL/></a></div>
    }
}