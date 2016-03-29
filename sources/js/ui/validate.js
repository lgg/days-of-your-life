/**
 * Validates user's input and shows alerts if it's not ok
 * @param divs object with every input for the birthday(see main.js for more info)
 * @returns {boolean}
 */
function validateInput(divs) {
    var d = divs.day.value,
        m = divs.month.value,
        y = divs.year.value;

    //Check if empty
    if (!(d && m && y)) {
        showAlert("Input is empty");
        return false;
    }

    //Check if it is integer
    if (!(parseInt(d) && parseInt(m) && parseInt(y))) {
        showAlert("Please, input a number");
        return false;
    }

    //Check ig we have very small year
    if (y < 1910) {
        showAlert("Please, stop hacking this site");
        return false;
    }

    //Check if all dates are okay
    //@TODO: add check for the 30 and 29 days(like isLeapYear())
    if (d <= 31 && m <= 12) {
        return true;
    } else {
        showAlert("Please, input a valid date");
        return false;
    }
}