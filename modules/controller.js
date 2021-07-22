const moment = require("moment");

function date(req, res) {
    const dateFormat = "YYYY-MM-DD";
    const toDateFormat = moment(new Date(req.params.date)).format(dateFormat);

    if (moment(toDateFormat, dateFormat, true).isValid()) {
        var DATE = moment(req.params.date).format('ddd, D MMM YYYY')
        var formatDate = DATE + " " + '00:00:00 GMT'
        res.json({
            unix: Math.round((new Date(req.params.date)).getTime()),
            utc: formatDate
        })

    } else if (!isNaN(req.params.id)) {
        var intId = parseInt(req.params.id)
        var DATE = moment(intId).format('ddd, D MMM YYYY')
        var formatDate = DATE + " " + '00:00:00 GMT'
        res.json({
            unix: intId,
            utc: formatDate
        })
    } else {
        res.json({
            error: "Invalid Date"
        })
        console.log(req.params)

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