const express = require('express')
const app = express()

app.get('/info', (req, res) => {
    info = [
        {"serverName": "localhost5000"},
        {"sampleName": "chinemerem-react"},
        {"serverVersion": "1.0.0"}
    ]
    res.json(info)
})

const port = 5000
   
app.listen(port, () => console.log(`SERVER started on port ${port}`));