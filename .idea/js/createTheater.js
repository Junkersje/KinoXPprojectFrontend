'use strict'

function addTheater(){

    let formData = {
        numberOfSeats: $("#numberOfSeats").val(),
        theaterNumber: $("#theaterNumber").val(),
    };

    console.log(formData)


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/v1/theaters",
        data: JSON.stringify(formData),
        dataType: "json",
        encode: true,
        headers: { "Content-Type": "application/json;charset=UTF-8"}
    }).done(function (data) {
        console.log(data);
    });
    event.preventDefault();
}