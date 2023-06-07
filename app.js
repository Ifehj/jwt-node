const express = require('express')
const app = express()

let PORT = 3000

app.listen(PORT, (req, res) => {
    console.log('Done');
})