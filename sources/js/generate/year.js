/**
 * Generates year div with current title
 * @param year
 * @returns {Element}
 */
function generateYear(year) {
    var year_div = document.createElement('div');
    year_div.setAttribute('class', "year");

    //Year title
    var year_title = document.createElement('div');
    year_title.textContent = year;
    year_title.setAttribute('class', "year-title");
    year_div.appendChild(year_title);

    return year_div;
}