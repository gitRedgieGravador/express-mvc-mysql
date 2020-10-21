const express = require("express");
const router = express.Router();

const TEST = require("../controllers/test")
const AUTH = require('../middleware/authorization');

router.get('/tests', /* AUTH.authorized, */ TEST.getTest)
router.post('/tests', TEST.createTest)
router.put('/tests', TEST.updateTest)
router.delete('/tests', TEST.deleteTest)

module.exports = router;