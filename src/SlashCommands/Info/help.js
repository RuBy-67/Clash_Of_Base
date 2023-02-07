const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "help",
  description: "Shows the help page!",
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
          name:"h",
          value:"h",
        },
        {
          name:"h",
          value: "h",
        },
        {
          name: "h",
          value:"h",
          inline: true,
        }
      )
      .setColor("GREEN")
      .setThumbnail(
        ""
      )
      .setFooter({
        text: "RuBy_",
        iconURL:"",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};
