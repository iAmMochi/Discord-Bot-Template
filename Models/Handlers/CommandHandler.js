// Requiring the needed files.
const {Command} = require('../index');

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
     * @description Process all our commands from the folder with the subfolders (subfolders are there to categorize the commands even more.)
     */
    process() {
        return glob(`${this.directory}Modules/Commands/**/*.js`).then(commands => {
            for (const commandFile of commands) {
                delete require.cache[commandFile];

                const {name} = path.parse(commandFile);
                const File = require(commandFile);

                if (!this.isClass(File)) return new this.client.logger().warn(`Command ${name} doesn't export a class!`);

                const command = new File(this.client, name.toLowerCase());

                if (!(command instanceof Command)) return new this.client.logger().warn(`${name} doesn't belong to commands!`);

                this.client.commands.set(command.name, command);

                if (command.aliases.length) {
                    for (const alias of command.aliases) {
                        this.client.aliases.set(alias, command.name);
                    }
                }
            }
        });
    }
};

// Export our listener/event handler class.
module.exports = ListenerHandler;