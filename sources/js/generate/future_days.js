/**
 * Generate days_divs from start till max with only 1 class - "day" and returns updated start counter
 * (used for generating future days of your life)
 * @param start from which day we need to generate
 * @param max till which day we need to generate
 * @param year num of current year
 * @param toAppend div to which we weill append this days
 * @param days_counter global counter for days of life amount
 * @returns {*}
 */
function generateFutureDays(start, max, year, toAppend, days_counter) {
    var day_class, //class for the day
        day_title, //title for the day
        this_date, //current day in a row
        this_day; //current day in unixtime format
    while (start <= max) {
        day_class = '';
        this_date = getDateFromDay(start, year);
        this_day = getUnixTime(formatDateToString(this_date));

        day_title = "[" + getStringFromDate(this_date) + "] " + (days_counter + start) + " day of your life";

        generateDay(toAppend, day_class, start, this_date, day_title);

        start++;
    }
    return start;
}