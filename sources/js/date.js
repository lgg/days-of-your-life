/**
 * Checks if this year is leap or not
 * @param year which we need to check
 * @returns {boolean}
 */
function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() == 1;
}

/**
 * Converts date to "24-Nov-2009 17:57:35" format, see getUnixTime() for more info
 * @param date which nned to be converted
 * @returns {string}
 */
function formatDateToString(date) {
    return date.getDate() + "-" + getMonthName(date) + "-" + date.getFullYear() + " 00:00:00";
}

/**
 * Returns unixtime in seconds
 * @param time in "24-Nov-2009 17:57:35" format, see formatDateToString() for more info
 * @returns {number}
 */
function getUnixTime(time) {
    return new Date(time).getTime() / 1000;
}

/**
 * Returns date generated from day and year
 * @param day of the year, from 1 january (e.g. 364 will be 30 december in non-leap year, and 29 december in leap year)
 * @param year
 * @returns {Date}
 */
function getDateFromDay(day, year) {
    var date = new Date(year, 0);
    return new Date(date.setDate(day)); // add the number of days
}

/**
 * Returns month name in short format for the formatDateToString()
 * @param date
 * @returns {string}
 */
function getMonthName(date) {
    return date.toLocaleString("en-us", {month: "short"});
}

/**
 * Converts date to "28.12.1990" format
 * @param date
 * @returns {string}
 */
function getStringFromDate(date) {
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}

/**
 * Resets seconds, minutes and hours in the date
 * @param date
 * @returns {*}
 */
function resetTimeInDate(date) {
    date.setMinutes(0);
    date.setSeconds(0);
    date.setHours(0);
    return date;
}