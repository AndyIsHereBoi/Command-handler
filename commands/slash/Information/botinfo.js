const { Command } = require("../../../utils/command/command");
const { MessageEmbed, version } = require(`discord.js`);
const { duration } = require(`../../../handlers/functions`);
const { ownerId } = require("../../../config.json")

module.exports = new Command({
  // options
  name: `botinfo`,
  description: `get info of bot`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor("#03dbfc")
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `** Bot Owner: <@${ownerId}> | [Github](https://github.com/AndyIsHereBoi) ** \n\n`
          )
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `Bot Name`,
              value: `>>> \`${client.user.username}\``,
              inline: true,
            },
            {
              name: `Bot Ping`,
              value: `>>> \`${client.ws.ping}ms\``,
              inline: true,
            },
            {
              name: `Server Count:`,
              value: `>>> \`${client.guilds.cache.size} Servers\``,
              inline: true,
            },
            {
              name: `User Count:`,
              value: `>>> \`${client.users.cache.size} Users\``,
              inline: true,
            },
            {
              name: `Channels:`,
              value: `>>> \`${client.channels.cache.size} Channels\``,
              inline: true,
            },
            {
              name: `Node.js Version:`,
              value: `>>> \`${process.version}\``,
              inline: true,
            },
            {
              name: `Discord.JS Version:`,
              value: `>>> \`${version}\``,
              inline: true,
            },
            {
              name: `Bot Commands:`,
              value: `>>> \`\`\`Commands: ${client.commands.size}, SubCommands: ${client.subcmd.size}.\`\`\``,
            },
            {
              name: `Bot Uptime`,
              value: `>>> \`\`\`${duration(client.uptime)
                .map((i) => `${i}`)
                .join(`, `)}.\`\`\``,
            },
          ])
      ],
    });
  },
});
