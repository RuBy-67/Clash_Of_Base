const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
const config = require(`../../jsons/config.json`);

module.exports = {
  name: "esport",
  description: "Esport Server List",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("E-sport Server")
      .setDescription("Some Tournaments server")
      .addFields(
        {
          name: "Black Widow :flag_fr: :flag_gb: :flag_es:",
          value:
            emoji(emo.discord) + " [discord.gg/BW](https://discord.gg/d963sGx)",
        },
        {
          name: "ASKIP :flag_fr: :flag_gb: :flag_es:",
          value:
            emoji(emo.discord) +
            " [discord.gg/ASKIP](https://discord.gg/w4mPu7umM8)",
        },
        {
          name: "French Family Federation :flag_fr:",
          value:
            emoji(emo.discord) +
            " [discord.gg/FFF](https://discord.gg/DjWmy2s)",
        },
        {
          name: "French Clash Cup :flag_fr: :flag_gb:",
          value:
            emoji(emo.discord) +
            " [discord.gg/FCC](https://discord.gg/pew8gQM)",
        },
        {
          name: "Clash Master League :flag_gb: :flag_in:",
          value:
            emoji(emo.discord) +
            " [discord.gg/CML](https://discord.gg/DUERrdYVvy)",
        },
        {
          name: "Clash of Clans ITALIA :flag_it:  ",
          value:
            emoji(emo.discord) +
            " [discord.gg/CCI](https://discord.gg/7YKzm9PvJH)",
        },
        {
          name: "EON League :flag_gb: :flag_fr:",
          value:
            emoji(emo.discord) +
            " [discord.gg/EON](https://discord.gg/heJPpVBRq7)",
        },
        {
          name: "World Clash Center " + emoji(emo.earth),
          value:
            "*Find more tournament and event about Clash of clan here !*\n" +
            emoji(emo.discord) +
            " [discord.gg/WCC](https://discord.gg/bGEbhjBUqV)",
        }
      )
      .setColor(config.colorPink)
      .setFooter({
        text: "Clash of Base - Developped by " + config.dev,
        iconURL: client.user.displayAvatarURL(),
      });

    return interaction.reply({ embeds: [embed] });
  },
};
