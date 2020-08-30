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

    /**
     * @description Used to fetch members.
     * @param {String} value - Value to fetch from.
     * @param {Guild} guild - The guild to fetch the member from.
     */
    async member(value, guild) {
        value = value.toLowerCase();

        if (value instanceof GuildMember) return value;
        if (!(guild instanceof Guild)) return new this.client.logger().warn(`To use the member resolver, you must declare the guild parameter!`);

        let fetchedMember = guild.members.cache.find(
            m =>
                m.nickname.toLowerCase() === value ||
                m.user.username.toLowerCase() === value ||
                m.user.tag.toLowerCase() === value ||
                m.user.id === value.replace(/[\\<>@!]/g, '')
        );

        return (await guild.members.fetch(fetchedMember.id)) || null;
    }

    /**
     * @description Used to fetch roles.
     * @param {String} value - Value to fetch from.
     * @param {Guild} guild - The guild to fetch the member from.
     */
    role(value, guild) {
        value = value.toLowerCase();

        if (value instanceof Role) return value;
        if (!(guild instanceof Guild)) return new this.client.logger().warn(`To use the role resolver, you must declare the guild parameter!`);

        let fetchedRole = guild.roles.cache.find(
            r =>
                r.name.toLowerCase() === value ||
                r.id === value.replace(/[\\<>@&]/g, '')
        );

        return fetchedRole || null;
    }

    /**
     * @description Used to fetch channels.
     * @param {String} value - Value to fetch from.
     * @param {Guild} guild - The guild to fetch the channel from.
     */
    channel(value, guild) {
        value = value.toLowerCase();

        if (value instanceof Channel) return value;
        if (!(guild instanceof Guild)) return new this.client.logger().warn(`To use the channel resolver, you must declare the guild parameter!`);

        let fetchedChannel = guild.channels.cache.find(
            c =>
                c.name.toLowerCase() === value ||
                c.id === value.replace(/[\\<>#]/g, '')
        );

        return fetchedChannel || null;
    }
};

// Export the fetcher class.
module.exports = Fetcher;