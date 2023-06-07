const express = require('express')
const app = express()
const dashboardRoute = require('./routers/dashboardRouter')

app.use("/dashboardRoute", dashboardRoute)

let PORT = 3000

app.listen(PORT, (req, res) => {
    console.log('Done');
})