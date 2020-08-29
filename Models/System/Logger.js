// The datifier used for the logger.
let Datifier = require('./Datifier');
Datifier = new Datifier();

// Create the class for the logger  
// that logs messages to console.
class Logger {
    /**
     * @description Log a custom type of log to console with a provided message.
     * @param {string} type - Type of logger.
     * @param {string} msg - Message to send to console.
     */
    custom(type, msg) {
        return console.log(
            `[CONSOLE | ${type.toUpperCase()}] (${Datifier.logger(Date.now())}): ${msg}`
        );
    }

    /**
     * @description Log a info type of log to console with a provided message.
     * @param {string} msg - Message to send to console.
     */
    info(msg) {
        return console.log(
            `[CONSOLE | INFO] (${Datifier.logger(Date.now())}): ${msg}`
        );
    }

    /**
     * @description Log a debug type of log to console with a provided message.
     * @param {string} msg - Message to send to console.
     */
    debug(msg) {
        return console.log(
            `[CONSOLE | DEBUG] (${Datifier.logger(Date.now())}): ${msg}`
        );
    }

    /**
     * @description Log a warning type of log to console with a provided message.
     * @param {string} msg - Message to send to console.
     */
    warn(msg) {
        return console.log(
            `[CONSOLE | WARNING] (${Datifier.logger(Date.now())}): ${msg}`
        );
    }

    /**
     * @description Log a error type of log to console with a provided message.
     * @param {string} msg - Message to send to console.
     */
    error(msg) {
        return console.log(
            `[CONSOLE | ERROR] (${Datifier.logger(Date.now())}): ${msg}`
        );
    }
};

// Export our logger class.
module.exports = Logger;