//CREATING A PATH

const path = require('path');

//EXPORTING THE REQUESTED DATA TO THE RESPECTIVE HTML FILES IN THE HTML FOLDER

module.exports = (app) => {
    app.get('/tables', (req, res) => {
        res.sendFile(path.join(__dirname, '../html/tables.html'))
    });

    app.get('/reserve', (req, res) => {
        res.sendFile(path.join(__dirname, '../html/reserve.html'))
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../html/home.html'))
    });
};




