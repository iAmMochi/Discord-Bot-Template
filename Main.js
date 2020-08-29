// The bot client.
let client = require('./Models/Main/Client');
client = new client();

// Requiring the needed packages.
const {config} = require('dotenv');
const {VultrexDB} = require('vultrex.db');

// Configuration for our .env file for more security.
// To access a key from .env use process.env.<KEY>
// NOTE: the key MUST ALWAYS be uppercase.
config({path: `${__dirname}/.env`});

// Creating and setting a database...
const database = new VultrexDB({
    provider: 'sqlite',
    fileName: 'database',
    table: 'main'
});

// Connecting to the database...
database.connect().then(async () => {
    // Set snipes map. (used for a snipe command,
    // remove it if you won't be using it.)
    client.snipes = new Map();

    // Set a object for the prefix (we'll be using
    // server prefixes in this bot template.)
    client.prefix = new Object();
    
    // Default prefix.
    client.prefix['default'] = process.env.PREFIX;

    // Connect to Discord using the token.
    client.connect(process.env.TOKEN);
});