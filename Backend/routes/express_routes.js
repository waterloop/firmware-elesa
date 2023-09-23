const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const teaController = require('../controllers/express_client'); 
// 3.
router.post('/BMS_data', teaController.newTea);
// 4. 
module.exports = router; // export to use in server.js