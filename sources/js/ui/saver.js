/*
 * Saves generated days
 */
var saver = {
    html: {
        header: {
            open: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>My Life</title>',
            close: '</head><body><header><div class="title">My Life</div><div class="arrow">&darr; Years | Days &rarr;</div></header>'
        },
        footer: "</body></html>"
    },
    save: function(user_date){
        var html = this.html.header.open +
            this.generate.js(user_date) + this.generate.css() +
            this.html.header.close +
            this.generate.body() +
            this.html.footer;

        //Download .html via downloadjs library
        return download(html, "days.html", "text/plain");
    },
    generate: {
        js: function(ud){
            return '<script>' +
                'function resetTimeInDate(e){return e.setMinutes(0),e.setSeconds(0),e.setHours(0),e}function getUnixTime(e,t){return t?Math.floor(new Date(e).getTime()/1e3):Math.floor(e.getTime()/1e3)}function getCurrent(e,t,n){for(var i,r=getUnixTime(resetTimeInDate(new Date(e,t-1,n))),a=getUnixTime(resetTimeInDate(new Date)),s=document.getElementsByClassName("day"),d=0;d<s.length;d++)i=getUnixTime(s[d].getAttribute("data-date"),!0),i>=r&&a>i&&(s[d].classList.remove("current"),s[d].classList.add("ended")),i===a&&s[d].classList.add("current")}' +
                'document.addEventListener("DOMContentLoaded",function(){' +
                'getCurrent(' + ud.year + ',' + ud.month + ',' + ud.day + ')});' +
                '</script>';
        },
        css: function(){
            return '<style>' + dumpStyles() + '</style>';
        },
        body: function(){
            return get("days-wrap").outerHTML;
        }
    }
};