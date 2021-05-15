const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();

const PORT = 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routing
require('./controllers/dataRoute')(app);
require('./controllers/pageRoute')(app);
// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));