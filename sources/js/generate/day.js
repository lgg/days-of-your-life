/**
 * Generates a day-div element and appends it to toAppend element
 * @param toAppend element to which generated day will be append
 * @param classes of this day-div element
 * @param data_day data-attribute for the current day
 * @param data_date data-attribute for the current date
 * @param title which will be displayed when you will hover the day-div element
 */
function generateDay(toAppend, classes, data_day, data_date, title) {
    var day = document.createElement('div');
    day.setAttribute('class', 'day ' + classes);
    day.setAttribute('title', title);
    day.setAttribute('data-day', data_day);
    day.setAttribute('data-date', data_date);
    toAppend.appendChild(day);
}