/**
 * Dumps and returns all css styles on the page
 * @returns {*}
 */
function dumpStyles() {
    var crossrule;
    if (document.styleSheets[0].cssRules) {
        crossrule = document.styleSheets[0].cssRules
    } else if (document.styleSheets[0].rules) {
        crossrule = document.styleSheets[0].rules
    }

    if(!crossrule){
        showAlert("Can't save css styles, please open an issue");
        return false;
    }

    var i = 0;
    var dump = "";
    while(i < crossrule.length){

        dump += crossrule[i].cssText;
        i++;
    }

    return dump;
}