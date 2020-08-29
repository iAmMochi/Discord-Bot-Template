// Create an extendable command file.
class Command {
    /**
     * @param {any} client - The client (this way we can use this.client).
     * @param {any} options - The options for the command. 
     */
    constructor(client, options = {}) {
        this.client = client;

        this.category = options.category || 'Uncategorized';
        this.name = options.name;
        this.aliases = options.aliases || [];
        this.usage = options.usage || '';
        this.example = options.example || '';
        this.description = options.description || '';

        this.userPerms = options.userPerms || [];
        this.clientPerms = options.clientPerms || [];

        this.moderator = options.moderator || false;
        this.admin = options.admin || false;
        this.owner = options.owner || false;
        this.developer = options.developer || false;

        this.dm = options.dm || false;
        this.guild = options.guild || false;

        this.limit = options.limit || 0;
        this.duration = options.duration || 0;
    }

    async execute(message, args) {
        throw new Error(`Command ${this.name} doesn't do anything!`);
    }
};

// Export our extendable command class.
module.exports = Command;