// Packages required for embeds.
const {MessageEmbed, GuildMember, Guild} = require('discord.js');

// Datifier, used for the dates.
const {Datifier} = require('../index');
let datifier = new Datifier();

// Create the class to be able to make 
// custom message embeds.
class Embed extends MessageEmbed {
    /**
     * @description Make a default embed. (use .base() or .invalid() or .usage() to create other embeds)
     */
    constructor() {
        super()
        
        this.defaultColor = '780cfc';
        this.usageColor = 'a0a0a0';
        this.errorColor = 'ea4235';

        this.setColor(this.defaultColor);
    }

    /**
     * @description Creates a base embed.
     * @param {GuildMember} member - The member that initiated this embed.
     * @param {Guild} guild - The guild where this embed will be sent to.
     * @param {String} title - The title of the embed.
     * @param {String} desc - The description of the embed. (Put "" to leave it blank)
     * @param {Boolean} add_a_field - If there should be a field with a title and description. (Note that this can only be true or false)
     * @param {String} add_field_title - The title of the field. (Put "" to leave it blank)
     * @param {String} add_field_desc - The description of the field. (Put "" to leave it blank)
     */
    base(member, guild, title, desc, add_a_field, add_field_title, add_field_desc) {
        let b = this.setColor(this.defaultColor)
                    .setAuthor(title, guild.iconURL({dynamic: true}))
                    .setDescription(desc)
                    .setFooter(`${member.displayName} • ${datifier.message(Date.now())}`, member.user.displayAvatarURL({dynamic: true}));

        if (add_a_field) {
            b.addField(add_field_title, add_field_desc);

            return b;
        } else if (!add_a_field) {
            return b;
        }
    }

    /**
     * @description Creates a error embed.
     * @param {GuildMember} member - The member that initiated this embed.
     * @param {Guild} guild - The guild where this embed will be sent to.
     * @param {String} title - The title of the embed.
     * @param {String} desc - The description of the embed. (Put "" to leave it blank)
     * @param {Boolean} add_a_field - If there should be a field with a title and description. (Note that this can only be true or false)
     * @param {String} add_field_title - The title of the field. (Put "" to leave it blank)
     * @param {String} add_field_desc - The description of the field. (Put "" to leave it blank)
     */
    error(member, guild, title, desc, add_a_field, add_field_title, add_field_desc) {
        let b = this.setColor(this.errorColor)
                    .setAuthor(title, guild.iconURL({dynamic: true}))
                    .setDescription(desc)
                    .setFooter(`${member.displayName} • ${datifier.message(Date.now())}`, member.user.displayAvatarURL({dynamic: true}));

        if (add_a_field) {
            b.addField(add_field_title, add_field_desc);

            return b;
        } else if (!add_a_field) {
            return b;
        }
    }
};

// Export our embed class.
module.exports = Embed;