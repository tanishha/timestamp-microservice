const Router= require("express").Router();
const timeCtrl=require('./controller')

Router.route("/:date").get(timeCtrl.date)

module.exports = Router;
