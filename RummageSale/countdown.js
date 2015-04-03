// set the date we're counting down to
var rummage_date = new Date("Apr 13, 2015").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (rummage_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    $('#countdown').html(days + "d:" + hours + "h:"
    + minutes + "m:" + seconds + "s");  
 
}, 1000);