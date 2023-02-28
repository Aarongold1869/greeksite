const express = require('express')
const app  = express()
const port = 3000

// Virtual Path Prefix '/static'
app.use('/static', express.static('public'))
app.use(express.static('public'));
app.use(express.static('images'));


app.listen(port, () => {
    console.log("Application started and Listening on port " + port);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/pricing", (req, res) => {
    res.sendFile(__dirname + "/pages/pricing.html");
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/pages/404.html");    
})

