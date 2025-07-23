import express from "express"
import { ENV } from './config/env.js'

const app = express()
const port = ENV.PORT

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: true })
})

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`)
})