'use strict'

function addMovie(){

    let formData = {
        pgrating: $("#PGRtaing").val(),
        title: $("#title").val(),
        play_time: $("#playtime").val(),
        date: $("#date").val(),
        movie_genre: $("#genre").val(),
        description: $("#description").val(),
        theater_id: $("#theater-id").val(),
        tickets_available: $("#tickets_available").val(),
        imgurl: $("#imgurl").val()
    };


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/v1/movies",
        data: JSON.stringify(formData),
        dataType: "json",
        encode: true,
        headers: { "Content-Type": "application/json;charset=UTF-8"}
    }).done(function (data) {
        console.log(data);
    });
    event.preventDefault();
}
