const express = require('express')
const app = express()
const port = 3000

// dist here is the folder containing the compiled vue app
app.use(express.static('dist'));

// you could /dashboard as a route

// app.use('/dashboard', express.static('dist'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
