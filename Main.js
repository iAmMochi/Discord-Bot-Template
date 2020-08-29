// Requiring the needed packages.
const {config} = require('dotenv');
const {VultrexDB} = require('vultrex.db');

// Configuration for our .env file for more security.
config({path: `${__dirname}/.env`});

// Creating and setting a database...
const database = new VultrexDB({
    provider: 'sqlite',
    fileName: 'database',
    table: 'main'
});

//