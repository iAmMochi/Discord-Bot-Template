// Package needed to format the time.
const moment = require('moment');

// Create the class for reformatting time.
class Datifier {
    /**
     * @description Reformat milliseconds into human readable time for the logger.
     * @param {number} ms - The time to reformat.
     */
    logger(ms) {
        return moment(ms).format('dddd, hh:mm A');
    }

    /**
     * @description Reformat milliseconds into human readable time for the message.
     * @param {number} ms - The time to reformat.
     */
    message(ms) {
        return moment(ms).format('MMM Do YYYY, dddd hh:mm A');
    }
};

// Export our datifier class.
module.exports = Datifier;