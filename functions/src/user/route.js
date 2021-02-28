//user/route.js
const router = require("express").Router();
const controller = require("./controller");

//Endpoint url: https://yourfirebaseurl.com/api/authentication
router.post("/authentication/", controller.authentication);


module.exports = router;
//this route expects a POST request and will handle this call via the 
//function controller.authentication which is imported via the ./controller file.