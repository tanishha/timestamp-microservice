const Router= require("express").Router();
const timeCtrl=require('./controller')

Router.route("/:date").get(timeCtrl.date)
Router.route("/").get(timeCtrl.data)

module.exports = Router;


