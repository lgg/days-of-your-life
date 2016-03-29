/**
 * Adds class to the element
 * @param el to which we will add the classname
 * @param classname which will be added to the element
 */
function addClass(el, classname) {
    el.classList.add(classname);
}

/**
 * Removes class from the element
 * @param el from which we will remove the classname
 * @param classname which will be removed from the element
 */
function removeClass(el, classname) {
    el.classList.remove(classname);
}