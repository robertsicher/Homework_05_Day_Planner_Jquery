//Date and time finder
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

//Save button
$('.saveBtn').click(function() {
    const time = $(this).parent().attr('id');
    const task = $(this).siblings('.tasks').val();

    localStorage.setItem(time, task);
});

// Show the saved tasks
function showTasks() {
    $('.tasks').each(function() {
        let time = $(this).parent().attr('id');

        task = localStorage.getItem(time);

        $(this).val(task)
    })
};

// Load classes, times, and pull the local storage
$(document).ready(function () {

    updateTimeSlots();
    showTasks();

    setInterval(function () {
        updateCurrentDay();
        updateTimeSlots();
    }, 500);
});

