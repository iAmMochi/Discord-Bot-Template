// Package needed for the bot client.
const {Client, Collection} = require('discord.js');

// Files needed to assign on the bot client.
const {Datifier, Logger, ListenerHandler, CommandHandler, Fetcher, Pages} = require('../index');

// Create our client class for the bot.
class BotClient extends Client {
    constructor() {
        super({
            restTimeOffset: 850,
            messageCacheMaxSize: 500,
            messageCacheLifetime: 10100,
            messageSweepInterval: 10800,
            partials: ['MESSAGE', 'REACTION']
        });

        this.datifier = Datifier;
        this.logger = Logger;

        this.listenerHandler = new ListenerHandler(this);
        this.commandHandler = new CommandHandler(this);

        this.commands = new Collection();
        this.aliases = new Collection();
        this.cooldowns = new Map();

        this.fetcher = Fetcher;
    }

    /**
     * @description Loads the listeners/events and commands after that it will log the bot into Discord.
     * @param {any} token - The token to use to login into Discord.
     */
    async connect(token) {
        this.listenerHandler.process();
        this.commandHandler.process();

        return await super.login(token);
    }
};

// Export our bot client class.
module.exports = BotClient;