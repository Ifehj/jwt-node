const express = require('express')
const router = express.Router()
const redirectToDashboardCall = require('../Controllers/dashboard')

router.get("/dashboard", redirectToDashboardCall)

module.exports = router