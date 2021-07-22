const Router= require("express").Router();
const timeCtrl=require('./controller')

Router.route("/:id").get(timeCtrl.date)
Router.route("/").get(timeCtrl.data)

module.exports = Router;


