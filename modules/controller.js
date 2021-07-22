const moment = require("moment");

function date(req, res) {
    let date_string = req.params.id;
     let date;

    if (parseInt(date_string) < 10000) {
        date = new Date(date_string);

        var DATE = moment(date).format('ddd, D MMM YYYY')
        var formatDate = DATE + " " + '00:00:00 GMT'
        res.json({
            unix: Math.round((new Date(req.params.id)).getTime()),
            utc: formatDate
        })

    } else if (!isNaN(req.params.id)) {
        date = new Date(parseInt(date_string));
        var DATE = moment(date).format('ddd, D MMM YYYY')
        var formatDate = DATE + " " + '00:00:00 GMT'
        res.json({
            unix: date.valueOf(),
            utc: formatDate
        })
    } else {
        res.json({
            error: "Invalid Date"
        })
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