const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');

const bodyParser = require('body-parser');
const socket = require('./socket');

const response = require('./network/response');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socket.connect(server);
router(app);

app.use('/'+config.publicRoute, express.static('public'));

server.listen(config.port, function () {
    console.log(`La aplicacion esta escuncahdo en http://${config.host}:${config.port}`);
});