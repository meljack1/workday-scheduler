const currentDayEl = $('#currentDay');

const now = moment().format("dddd, MMMM Do");
currentDayEl.text(now);

