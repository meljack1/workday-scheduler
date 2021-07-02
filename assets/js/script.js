const currentDayEl = $('#currentDay');
const buttonList = $('button');
const timeblockList = $('textarea');

const now = moment();
currentDayEl.text(now.format("dddd, MMMM Do"));

// Change colour of textbox for past/present/future times

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

// If button clicked, store value of textbox locally under id number of the div

buttonList.on('click', function() {
    const textBox = $(this).prev();    
    // Get id number of the parent div
    const id = $(this).parent().attr('id');
    localStorage.setItem(id, textBox.val());
});

// Display value of text area in text area

(function() {
    for(let i = 0; i <= timeblockList.length; i++) {
        const id = $(timeblockList[i]).parent().attr('id');
        $(timeblockList[i]).val(localStorage.getItem(id));
    }
})(); 
