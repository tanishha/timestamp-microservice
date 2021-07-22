const Router= require("express").Router();
const timeCtrl=require('./controller')

Router.route("/:id").get(timeCtrl.date)
Router.route("/").get(timeCtrl.data)

module.exports = Router;



// if(date == "Invalid Date") {
//    return res.json({
//         error: "Invalid Date"
//     })
// }
// if (parseInt(date_string) < 10000) {
//     date = new Date(date_string);

//     var DATE = moment(date).format('ddd, D MMM YYYY')
//     var formatDate = DATE + " " + '00:00:00 GMT'
//     res.json({
//         unix: Math.round((new Date(req.params.id)).getTime()),
//         utc: formatDate
//     })

// } else  {
//     var intId = parseInt(req.params.id)
//     var DATE = moment(intId).format('ddd, D MMM YYYY')
//     var formatDate = DATE + " " + '00:00:00 GMT'
//     res.json({
//         unix: intId,
//         utc: formatDate
//     })
// } 
// }

