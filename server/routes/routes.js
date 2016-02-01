// Requirements
var controllers = require("../controllers")
var router = require('express').Router();
var path = require('path')
var utils = require('../helpers/utils.js');
var mobileControllers =  require("../controllers/mobile.js")

router.get('/', function(request, response){
  response.status(202).sendFile(path.resolve(__dirname + "../../../desktop_client/index.html"));
})

router.get('/mapInfo', utils.checkUser, function (request, response) {
  controllers.mapInfo.get(request, response)
})

router.post('/mapInfo', utils.checkUser, function (request, response) {
  controllers.mapInfo.post(request, response)
})

router.get('/location', utils.checkUser, function (request, response) {
  controllers.location.get(request, response)
})

router.get('/progress', utils.checkUser, function (request, response) {
  controllers.progress.get(request, response)
})

router.put('/progress', utils.checkUser, function (request, response) {
  controllers.progress.put(request, response)
})

router.post('/signup', function (request, response) {
  controllers.signup.post(request, response)
})

router.post('/login', function (request, response) {
  console.log("+++ 37 routes.js login")
  controllers.login.post(request, response)
})

router.get('/logout', function (request, response) {
  controllers.logout.get(request, response)
})

// for(var route in controllers){
//   if(route === 'signup' || route === 'login'){
//     console.log("+++ 14 routes.js First")
//     router.route("/" + route)
//     .all(utils.checkUser)
//     .get(controllers[route].get)
//     .post(controllers[route].post)
//     .put(controllers[route].put)
//   } else{
//     console.log("+++ 21 routes.js second")
//     router.route("/" + route)
//     .all(utils.checkUser)
//     .get(controllers[route].get)
//     .post(controllers[route].post)
//     .put(controllers[route].put)


    // router.route("/" + route)
    // router.get(route, util.checkUser, controller[route].get)
//   };
// }

// This works without authentication for localhost
//
// for(var route in controllers){
//   router.route("/" + route)
//   .get(controllers[route].get)
//   .post(controllers[route].post)
//   .put(controllers[route].put)
// }
//
// for(var route in mobileControllers){
//   router.route("/" + route)
//   .get(mobileControllers[route].get)
//   .post(mobileControllers[route].post)
// }
//
// module.exports = router;
