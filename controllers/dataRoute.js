//CREATING A PATH

const tableData = require('../data/tableData');
const waitListData = require('../data/waitListData');

//EXPORTING THE REQUESTED DATA TO THE RESPECTIVE HTML FILES IN THE HTML FOLDER

module.exports = (app) => {
    app.get('../html/tables', (req, res) => res.JSON(tableData));

    app.get('../html/reserve', (req, res) => res.JSON(waitListData));

// IF THIS DOESN'T WORK REFER TO POST THINGY

    app.post('../html/tables', (req, res) => {
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.JSON(true);
        } else {
            waitListData.push(req.body);
            res.JSON(false);
        }
    });

    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
        res.json({ ok: true });
     });
};

