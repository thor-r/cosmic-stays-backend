import express from 'express'
import mongoose from 'mongoose'
import router from './config/routes.js'
import { port, dbURI } from './config/environment.js'

//variables
const app = express()

const startServer = async () => {
  try {
    //attempt mongodb connection
    await mongoose.connect(dbURI)

    //Middleware

    //JSON parser - Adds the body from the request as JSON to req.body
    app.use(express.json())

    app.use((req, _res, next) => {
      console.log(`🖖 Request received: ${req.method} - ${req.url}`)
      next()
    })

    //Routes
    app.use('/api', router)

    //Catch Errors
    app.use((_req, res) => {
      return res.status(404).json({ message: 'Route Not Found' })
    })

    app.listen(port, () => console.log(`🚀  Server listening on port ${port}`))

  } catch (err) {
    console.log(err)
  }
}
startServer()