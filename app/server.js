const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var PORT = 3030;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);




app.listen(proccess.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});