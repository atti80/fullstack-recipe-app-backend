import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`)
})