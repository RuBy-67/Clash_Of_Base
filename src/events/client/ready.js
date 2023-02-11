const chalk = require("chalk");
const config = require("clash-of-clans-api/config");
const { Client } = require("discord.js");
const { activityInterval, dev } = require("../../jsons/config.json");

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
      `/help | Watching Clash API`,
      `Created by ${dev}`,
      `look ${allMembers.size} members`,
      `/player ${client.guilds.cache.size} servers `,
      `/clan ${client.channels.cache.size} channels `,
    ];
    setInterval(() => {
      const status = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(status);
    }, activityInterval * 1000);
  }
};
