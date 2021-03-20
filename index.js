const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ a: 1 }))
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
