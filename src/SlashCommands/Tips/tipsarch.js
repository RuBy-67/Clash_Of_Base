const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_archery",
  description: "Commander List + Talent tree in archery",

  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "1",
          value: "ysg",
        },
        {
          name: "1",
          value: "ysg2",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("commanders");
    const embed = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });
    const embed2 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });
    const embed3 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "ysg") {
      embed.setColor("#FFDC00");
      embed.setTitle("Yi-Seong-Gye");
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "ysg2") {
      return interaction.reply("ok");
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
