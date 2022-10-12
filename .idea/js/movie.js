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
        this.loadMovies();
    }

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
        //$("#movie-imgURL").src(entry.imgURL);
        $("#movie-data").show();
    }

    //array med movies og loo
    async loadMovies() {
        let movieRows = "<div class=\"row\">";

        for(let i = 0; i < this.data.length; i++) {
            movieRows += "<div class=\"col-sm-4\"><a href='filmInfo.html/" + this.data[i].id + "'><img class='img-fluid' src='"+this.data[i].imgURL +"'/></a></div>";
            if(i != 0 && (i + 1) % 3 == 0) {
                movieRows += "</div><div class=\"row\">";
            }
        }

        movieRows += "</div>";
        document.getElementById("container-json").innerHTML = movieRows;
    }

    async movieInfo() {
        let pathURL =
    }

    //getURLId() {
    //    let url_string = window.location.href;
    //    let url = new URL(url_string);
    //    let id = url.searchParams.get("id");
    //    return id;
    //}
}

var movie = new MOVIE();
//"<div class=\"row\">" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i].imgURL + "\"/></a></div>" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i + 1].imgURL + "].imgURL}/></a></div>" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i + 2].imgURL +  "].imgURL}/></a></div>" +
//+ "</div>";
