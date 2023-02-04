const chalk = require("chalk");
const { Client } = require("discord.js");
const { activityInterval } = require("../../jsons/config.json");

module.exports = (client) => {
  client.user.setPresence({ status: "online" });

  let allMembers = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(` ${client.guilds.cache.size} servers `),
    chalk.bgMagentaBright.black(` ${client.channels.cache.size} channels `),
    chalk.bgMagentaBright.black(` ${allMembers.size} members `)
  );
  updateActivity(client);

  /**
   * @param {Client} client
   */
  async function updateActivity(client) {
    const activities = [
      `/help | Watching Geek in #1215`,
      `Created by RuBy#0822`,
      `look ${allMembers.size} members`,
    ];
    setInterval(() => {
      const status = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(status);
    }, activityInterval * 1000);
  }
};
