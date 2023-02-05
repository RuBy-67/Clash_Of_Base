const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "helpA",
  description: "Shows the help Admin page!",
  userPerms: ["ADMINISTRATOR"],
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Help Menu")
      .setDescription("")
      .addFields(
        {
          name: "",
          value: "",
        },
        {
          name: "",
          value: "",
        },
        {
          name: "",
          value: "",
          inline: true,
        }
      )
      .setColor("GREEN")
      .setThumbnail("")
      .setFooter({
        text: "RuBy_",
        iconURL: "",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};
