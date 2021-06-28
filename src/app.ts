import express from "express"
import {routes} from "./routes/index"
import "reflect-metadata"
import "./database"
const app = express()
const port = 5050

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})