// sådan kan man tage imod info fra bruger via knap
let censur;
let movieTitle;
let hours;
let minuttes;
let reviews;
let premiere;
let genre;

document.getElementById("submitKnap").onclick = function(){

    // får fat på bruger data i html
    censur = document.getElementById("censur").value;
    movieTitle = document.getElementById("movieTitle").value;
    hours = document.getElementById("hours").value;
    minuttes = document.getElementById("minuttes").value;
    reviews = document.getElementById("reviews").value;
    premiere = document.getElementById("premiere").value;
    genre = document.getElementById("genre").value;

    // p'er for at vise at data er blevet gemt
    document.getElementById("p1").innerHTML = censur;
    document.getElementById("p2").innerHTML = movieTitle;
    document.getElementById("p3").innerHTML = hours;
    document.getElementById("p4").innerHTML = minuttes;
    document.getElementById("p5").innerHTML = reviews;
    document.getElementById("p6").innerHTML = premiere;
    document.getElementById("p7").innerHTML = genre;
    console.log(movieTitle);
}