/*https://codepen.io/dartokloning/pen/ZEBjgWm  ----link to a good example of +/- button and how it works js*/

'use strict'
console.log("bøøøøh");
class Ticket {
    ticketurldata = 'http://localhost:8080/api/v1/tickets';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    async fetchData(){
        let response = await fetch(this.ticketurldata);
        this.data = await response.json();
        this.showUI();
        this.setTicketData(1);
    };

    showUI(){
        $('#ticket').text(this.data.ticket);
    }

    setTicketData(index) {
        let entry = this.data[index];
        $("#ticket-data").text(entry.price);
        $("#ticket-data").show();
    }
}
var ticket = new Ticket();
