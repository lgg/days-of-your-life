/**
 * Removes "none" class from the element
 * @param el
 */
function showElement(el) {
    removeClass(el, "none");
}

/**
 * Adds "none" class to the element
 * @param el
 */
function hideElement(el) {
    addClass(el, "none");
}