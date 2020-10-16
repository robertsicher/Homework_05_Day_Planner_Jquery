//Date and time display
var currentDay = $("#currentDay");

function updateCurrentDay() {
    var dateTime = moment().format("ddd, Do MMMM YY, h:mm:ss");
    currentDay.text(dateTime);
};

//Colour change time slots

function updateTimeSlots() {

    $('.tasks').each(function () {
        let hourBlock = parseInt($(this).parent().attr('id'));
        $(this).removeClass('past present future')

        if (hourBlock < moment().hour()) {
            $(this).addClass('past');
        } else if ( hourBlock === moment().hour()){
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
};

// Load classes and times
$(document).ready(function () {

    updateTimeSlots();

    setInterval(function () {
        updateCurrentDay();
        updateTimeSlots();
    }, 500);
});