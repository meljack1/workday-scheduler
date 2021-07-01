const currentDayEl = $('#currentDay');

const now = moment();
currentDayEl.text(now.format("dddd, MMMM Do"));

$("textarea").each(function() {
    const format = 'H';
    const id = $(this).parent().attr('id');
    // Remove non-numerical characters from id to get time
    // Convert to moment objects in 'H' format 
    const timeblockHour = moment(id.replace(/\D/g, ''), format);
    const currentHour = moment(now.format('H'), format);

    if(currentHour.isBefore(timeblockHour)) {
        $(this).addClass('future');
    } else if(currentHour.isAfter(timeblockHour)) {
        $(this).addClass('past');
    } else {
        $(this).addClass('present');
    }
});

