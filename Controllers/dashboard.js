const express = require('express')

redirectToDashboard = async (req, res) => {
    res.send('Welcome to dashboard !')
}

module.exports = redirectToDashboard