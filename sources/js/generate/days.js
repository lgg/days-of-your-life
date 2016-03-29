/**
 * Generate days_divs from start till max, checks for ended, current or future days and returns updated start counter
 * @param user_date user's birth object(see main.js for more info)
 * @param now time object(see main.js for more info)
 * @param start from which day we need to generate
 * @param max till which day we need to generate
 * @param year num of current year
 * @param toAppend div to which we weill append this days
 * @param days_counter global counter for days of life amount
 * @returns {*}
 */
function generateDays(user_date, now, start, max, year, toAppend, days_counter) {
    var day_class, //class for the day
        day_title, //title for the day
        this_date, //current day in a row
        this_day; //current day in unixtime format
    while (start <= max) {
        day_class = '';
        this_date = getDateFromDay(start, year);
        this_day = getUnixTime(formatDateToString(this_date));

        if (user_date.date_sec <= this_day && this_day < now.date_sec) {
            day_class += " ended";
        }

        if (this_day == now.date_sec) {
            day_class += " current";
        }

        if(this_day < user_date.date_sec){
            day_title = "[" + getStringFromDate(this_date) + "]";
        }else{
            day_title = "[" + getStringFromDate(this_date) + "] " + (days_counter + start) + " day of your life";
        }

        generateDay(toAppend, day_class, start, this_date, day_title);

        start++;
    }
    return start;
}