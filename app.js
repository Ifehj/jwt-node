const express = require('express')
const app = express()
const dashboardRoute = require('./routers/dashboardRouter')
const loginRoute = require('./routers/authRoute')

app.use(express.json());
app.use("/v1", dashboardRoute)
app.use("/v2", loginRoute)

let PORT = 3000

app.listen(PORT, (req, res) => {
    console.log('Done');
})