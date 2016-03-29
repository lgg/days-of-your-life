/* See saver.js for more */

document.addEventListener('DOMContentLoaded', function () {
    getCurrent(y, m, d);
});

/**
 * Resets time in date
 * @param date
 * @returns {*}
 */
function resetTimeInDate(date) {
    date.setMinutes(0);
    date.setSeconds(0);
    date.setHours(0);
    return date;
}

/**
 * Parse unixtime from date or string
 * @param date
 * @param fromString
 * @returns {number}
 */
function getUnixTime(date, fromString) {
    if(fromString){
        return Math.floor(new Date(date).getTime() / 1000);
    }else{
        return Math.floor(date.getTime() / 1000);
    }
}

/**
 * Checks all days blocks and updates their classes
 * @param y birth year
 * @param m birth month
 * @param d birth day
 */
function getCurrent(y, m, d) {
    var user_date = getUnixTime(resetTimeInDate(new Date(y, m - 1, d)));
    var now_unix = getUnixTime(resetTimeInDate(new Date()));
    var this_date;

    var days = document.getElementsByClassName("day");
    for (var i = 0; i < days.length; i++) {
        this_date = getUnixTime(days[i].getAttribute("data-date"), true);

        if (user_date <= this_date && this_date < now_unix) {
            days[i].classList.remove("current");
            days[i].classList.add("ended");
        }

        if (this_date === now_unix) {
            days[i].classList.add("current");
        }
    }
}