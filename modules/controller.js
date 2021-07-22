const moment = require("moment");

function date(req, res) {
    let date_string = req.params.date;
    let date;

    if (parseInt(date_string) < 10000) {
        date = new Date(date_string);

    } else {
        date = new Date(parseInt(date_string));

    }
    if (date == "Invalid Date") {
        res.json({
            error: "Invalid Date"
        })
    } else {
        var DATE = moment(date).format('ddd, D MMM YYYY')
        var formatDate = DATE + " " + '00:00:00 GMT'
        res.json({
            unix: date.valueOf(),
            utc: formatDate,
        });
    }
}

function data(req, res) {

    res.json({
        unix: Math.round((new Date()).getTime()),
        utc: new Date().toUTCString()
    })
}

module.exports = {
    date,
    data,
};