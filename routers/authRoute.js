const express = require('express')
const router = express.Router()
const loginCall = require('../Controllers/authController')

router.get("/login/:password", loginCall)

module.exports = router