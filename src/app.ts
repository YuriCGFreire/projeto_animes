import express from "express"
import reflect_metada from "reflect-metadata"
const app = express()
const port = 5050

app.get("/", (req, res) => {
    return res.json({ message: "Starting my project!" })
    
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})