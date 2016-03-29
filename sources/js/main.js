document.addEventListener('DOMContentLoaded', function () {
    var el_days = get("days"),
        loader = get("loader"),
        input = get("input"),
        go_btn = get("go"),
        birth = {
            day: get("birth-day"),
            month: get("birth-month"),
            year: get("birth-year")
        };

    //User's birth date object
    var user_date = {
        year: false,
        month: false,
        day: false,
        set: function (d, m, y) {
            this.day = parseInt(d, 10);
            this.month = parseInt(m, 10);
            this.year = parseInt(y, 10);
        },
        check: function () {
            return (this.year && this.month && this.day);
        },
        init: function () {
            this.date = new Date(this.year, this.month - 1, this.day);
            this.date_sec = getUnixTime(formatDateToString(this.date));
        }
    };

    //Now time object
    var now = {
        date: resetTimeInDate(new Date()),
        init: function () {
            //Set year and day in unixtime format
            this.year = this.date.getFullYear();
            this.date_sec = getUnixTime(formatDateToString(this.date));
        }
    };
    now.init();

    //Check if it's localhosted version and user's birth is defined
    if (user_date.check()) {
        hideElement(input);

        setTimeout(function () {
            renderDays(el_days, now, user_date, function () {
                hideElement(loader);
            });
        }, 100);
    }

    //Hide helpful elements
    hideElement(loader);
    hideElement(get("alert"));
    hideElement(get("save"));

    //Add action on "go" btn
    go_btn.addEventListener("click", function () {
        go(user_date, birth, loader, input, el_days, now);
    });

    //Also add trigger to enter press
    input.addEventListener("keypress", function(e){
        if (e.keyCode == 13) {
            go(user_date, birth, loader, input, el_days, now);
        }
    });

    //Add cation on "save" btn
    get("save").addEventListener("click", function () {
        if(saver.save(user_date)){
            showAlert("Saved successfully")
        }else{
            showAlert("Can't save, please open an issue");
        }
    });
});

function go(user_date, birth, loader, input, el_days, now){
    //Check if we have valid input data
    if (validateInput(birth)) {
        //Update user's birth date object
        user_date.set(
            birth.day.value,
            birth.month.value,
            birth.year.value
        );
        user_date.init();

        //Show loader and hide input forms
        showElement(loader);
        hideElement(input);

        //Dirty hack to let UI get loaded
        setTimeout(function () {
            //Start rendering days
            renderDays(el_days, now, user_date, function () {
                hideElement(loader);
                showElement(get("save"));

                //update text color to black
                addClass(get("alert"), "black");
            });
        }, 100);
    }
}