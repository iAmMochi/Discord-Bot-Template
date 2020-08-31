// Requiring the needed files.
const Listener = require('../Extendables/Listener');

// Requiring the needed packages.
const path = require('path');
const {promisify} = require('util');
// Make sure to promisify this.
const glob = promisify(require('glob'));

// Creating the class for the listener/event handler.
class ListenerHandler {
    /**
     * @param {any} client - The bot client.  
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * @description Check if the provided file is a class.
     * @param {any} input - File to check.
     */
    isClass(input) {
        return typeof input === 'function' &&
               typeof input.prototype === 'object' &&
               input.toString().substring(0, 5) === 'class';
    }

    /**
     * @description Get the directory.
     */
    get directory() {
        return `${path.dirname(require.main.filename)}${path.sep}`;
    }

    /**
     * @description Process all our listeners/events from the folder with the subfolders (subfolders are there to categorize the listeners/events even more.)
     */
    process() {
        return glob(`${this.directory}Modules/Listeners/**/*.js`).then(listeners => {
            for (const listenerFile of listeners) {
                delete require.cache[listenerFile];

                const {name} = path.parse(listenerFile);
                const File = require(listenerFile);

                if (!this.isClass(File)) return new this.client.logger().warn(`Listener ${name} doesn't export a class!`);

                const listener = new File(name.toLowerCase());

                if (!(listener instanceof Listener)) return new this.client.logger().warn(`${name} doesn't belong to listeners!`);

                this.client.on(listener.name, listener.fire.bind(null, this.client));
            }
        });
    }
};

// Export our listener/event handler class.
module.exports = ListenerHandler;