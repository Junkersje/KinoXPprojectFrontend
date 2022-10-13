'use strict'
console.log("hej");
class MOVIE {
    movieurlData = 'http://localhost:8080/api/v1/movies/';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    async fetchData(){
        let response = await fetch(this.movieurlData);
        this.data = await response.json();

        this.showUI();
        //this.setMovieData(2);
        this.loadMovies();
        this.loadMovie();
    }

    showUI(){
        $('#movie').text(this.data.movie);
    }

    async setMovieData(index) {
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


    //getParameters() {
    //    let paramString = urlString.split('?')[1];
    //    let queryString = new URLSearchParams(paramString);
    //
    //    for (let pair of queryString.entries()) {
    //        console.log("Key is: " + pair[0]);
    //        console.log("Value is: " + pair[1]);
    //    }
    //}
    //array med movies og
    async loadMovie() {
        let movie = "<div class=\"col\">";
        movie += "<img class=\"img-fluid\" src='" + this.data[this.getURLId() -1].imgURL +"'/></div>";
        movie += "<div class=\"col text-center\">";
        movie += "<p>Censur: " + this.data[this.getURLId() -1].pgrating + " år+</p>";
        movie += "<p>Filmlængde: " + this.data[this.getURLId() -1].playTime + "</p>";
        movie += "<p>Titel: " + this.data[this.getURLId() -1].title + " </p>";
        movie += "<p>Premiere " + this.data[this.getURLId() -1].date + " </p>";
        movie += "<p>Genre: " + this.data[this.getURLId() -1].movieGenre + " </p>";
        movie += "<a href=\"ticketorder.html\" type=\"button\" class=\"btn btn-primary\">Køb billetter her</a>";
        movie += "</div>";
        document.getElementById("movie").innerHTML = movie;
    }

    async loadMovies() {
        let movieRows = "<div class=\"row\">";

        for(let i = 0; i < this.data.length; i++) {
            movieRows += "<div class=\"col-sm-4\"><a href='filmInfo.html?id=" + this.data[i].id + "'><img class='img-fluid' src='"+this.data[i].imgURL +"'/></a></div>";
            if(i != 0 && (i + 1) % 3 == 0) {
                movieRows += "</div><div class=\"row\">";
            }
        }

        movieRows += "</div>";
        document.getElementById("container-json").innerHTML = movieRows;
    }

    //async movieInfo() {
    //    let pathURL =
    //}

    getURLId() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let id = url.searchParams.get("id");
        return id;
    }
}

var movie = new MOVIE();
//"<div class=\"row\">" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i].imgURL + "\"/></a></div>" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i + 1].imgURL + "].imgURL}/></a></div>" +
//"<div class=\"col\"><a href=\"ticketorder.html\"><img class=\"img-fluid\" src=\"" + data[i + 2].imgURL +  "].imgURL}/></a></div>" +
//+ "</div>";
