// Required files for the listener/event.
const {Datifier, Listener} = require('../../../Models/index');

// Datifier.
const datifier = new Datifier();

// Create our ready listener/event class.
class Ready extends Listener {
    constructor() {
        super('ready');
    }

    fire() {
        console.log(`[CONSOLE | LOGIN] (${datifier.logger(Date.now())}): Logged in successfully!`);
    }
};

// Export our ready listener/event class.
module.exports = Ready;