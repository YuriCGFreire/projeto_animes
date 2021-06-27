import express from "express"
import "reflect-metadata"
import "./database"
const app = express()
const port = 5050

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})