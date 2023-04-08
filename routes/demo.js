const express= require('express');
const router = express.Router();

const demo_controller = require('../controllers/demo_controller');
router.get('/demo',demo_controller.demo);

module.exports=router;