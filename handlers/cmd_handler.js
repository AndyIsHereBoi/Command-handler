const { Client } = require("discord.js");
const fs = require("fs");

/**
 *
 * @param {Client} client
 */

module.exports = (client) => {
  try {
    fs.readdirSync("./commands/message").forEach((cmd) => {
      let commands = fs
        .readdirSync(`./commands/message/${cmd}/`)
        .filter((file) => file.endsWith(".js"));
      for (cmds of commands) {
        let pull = require(`../commands/message/${cmd}/${cmds}`);
        if (pull.name) {
          client.mcommands.set(pull.name, pull);
        } else {
          console.log(`${cmds} Command is not Ready`);
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
      }
    });
    console.log(`${client.mcommands.size} Message Commands Loaded`);
  } catch (e) {
    console.log(e);
  }
};
