const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "social",
  description: "Social link of my devs",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Social Link")
      .setDescription(
        `➼ ` +
          emoji(emo.github) +
          `** | [GitHub_RuBy67](https://github.com/RuBy-67)**\n➼ ` +
          emoji(emo.Twitter) +
          `** | [@ruben_bey67](https://twitter.com/ruben_bey67)**\n➼ ` +
          emoji(emo.discord) +
          `** |** <@375590278880428034>\n\n *Write me if you need any update in bot*`
      )
      .setColor("#3135D8")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1071177069985284292/1071188896139984936/DALLE_2023-01-21_23.20.43.png"
      );

    return interaction.reply({ embeds: [embed] });
  },
};
