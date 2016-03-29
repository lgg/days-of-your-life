/**
 * Generates a lot of divs with days
 * @param el wrapper for days divs
 * @param now time object(see main.js for more info)
 * @param user_date user's birth object(see main.js for more info)
 * @param callback function which will be called when all days will be generated
 */
function renderDays(el, now, user_date, callback) {
    //@TODO: optimize this function
    var y, //counter for year
        till, //user birth + 80 years
        d, //amount of days in the year
        k, //counter for rows of the year
        rows_amount, //counter for rows of the year
        j, //counter for days in the year
        c, //total counter for days amount
        year, //div block for year
        year_rows_wrap, //div block for wrap of the days
        half_year; //div block for year row

    c = getDaysTillBirthday(user_date);
    till = user_date.year + 80;
    y = user_date.year;

    while (y <= now.year) {
        if (isLeapYear(y)) {
            d = 366;
        } else {
            d = 365;
        }

        year = generateYear(y);

        //Create rows and days
        year_rows_wrap = document.createElement('div');
        year_rows_wrap.setAttribute('class', "half-year-wrap");
        rows_amount = 5;
        k = 1;
        j = 1;
        while (k <= rows_amount) {
            //Generate year row
            half_year = document.createElement('div');
            half_year.setAttribute('class', "half-year");

            //Generate days in row
            j = generateDays(user_date, now, j, Math.ceil(d * (k / rows_amount)), y, half_year, c);

            //Append year
            year_rows_wrap.appendChild(half_year);
            k++;
        }
        c += j - 1;
        year.appendChild(year_rows_wrap);

        //Append year
        el.appendChild(year);

        y++;
    }

    //Generate other days
    while (y <= till) {
        if (isLeapYear(y)) {
            d = 366;
        } else {
            d = 365;
        }

        year = generateYear(y);

        //Create rows and days
        year_rows_wrap = document.createElement('div');
        year_rows_wrap.setAttribute('class', "half-year-wrap");
        rows_amount = 5;
        k = 1;
        j = 1;
        while (k <= rows_amount) {
            //Generate year row
            half_year = document.createElement('div');
            half_year.setAttribute('class', "half-year");

            //Generate days in row
            j = generateFutureDays(j, Math.ceil(d * (k / rows_amount)), y, half_year, c);

            //Append year
            year_rows_wrap.appendChild(half_year);
            k++;
        }
        c += j - 1;
        year.appendChild(year_rows_wrap);

        //Append year
        el.appendChild(year);
        y++;
    }

    //Run callback
    if (typeof callback === "function") {
        callback();
    }
}