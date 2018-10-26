import express from 'express'
import bodyParser from 'body-parser'

import models from './models'

const app = express()

app.set("json spaces", 2)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    models.User.findAll().then( data => {
      res.json(data)
    })
})

app.listen(3002, () => {
    console.log("server is running in port 3002")
})