// Requiring the needed package
// to fetch Discord models.
const {
    User, 
    GuildMember, 
    Role, 
    Channel, 
    Guild
} = require('discord.js');

// Creating the class for fetching models.
class Fetcher {
    /**
     * @param {any} client - The bot client.  
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * @description Used to fetch users.
     * @param {String} value - Value to fetch from.
     */
    user(value) {
        value = value.toLowerCase();

        if (value instanceof User) return value;

        let fetchedUser = this.client.users.cache.find(
            u =>
                u.username.toLowerCase() === value ||
                u.tag.toLowerCase() === value ||
                u.id === value.replace(/[\\<>@!]/g, '')
        );

        try {
            if (!fetchedUser) fetchedUser = await this.client.users.fetch(value);
        } catch {}

        return fetchedUser || null;
    }
};

// Export the fetcher class.
module.exports = Fetcher;