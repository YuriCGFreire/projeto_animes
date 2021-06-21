import express from "express"
const app = express()
const port = 5050

app.get("/", (req, res) => {
    res.json({ message: "Starting my project!" })
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})