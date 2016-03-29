/**
 * Return amount of days from 1 january till user's birthday
 * @param user_date object with user's birth info(see main.js)
 * @returns {number}
 */
function getDaysTillBirthday(user_date) {
    var date = new Date(user_date.year, 0, 1);
    var date_sec = getUnixTime(formatDateToString(date));

    return -Math.floor((user_date.date_sec - date_sec) / (60 * 60 * 24));
}