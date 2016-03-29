/**
 * Shows alert/notification block with the message
 * @param message which will be displayed
 */
function showAlert(message) {
    var div = document.getElementById("alert");
    div.textContent = message;
    addClass(div, "animate-from-down");
    showElement(div);
    setTimeout(function () {
        hideElement(div);
        removeClass(div, "animate-from-down");
    }, 3000);
}