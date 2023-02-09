/* const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  type: 2,
  name: "hdv7",
  description: "test",
  options: [
    {
      type: 1,
      name: "queen_walk",
      description: "test",
      options: [
        {
          type: "STRING",
          name: "liste",
          description: "liste of queen walk compo",
          choices: [
            {
              name: "HGHB",
              value: "c7hghb",
            },
          ],
          required: true,
        },
      ],
    },
    {
      type: 1,
      name: "ballon",
      description: "ballon",
      options: [
        {
          type: "STRING",
          name: "liste",
          description: "liste",
          choices: [
            {
              name: "compo1",
              value: "compo1",
            },
          ],
          required: true,
        },
      ],
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const code = await interaction.options.getString("liste");
    const embed = new MessageEmbed();

    if (code == "compo1") {
      return interaction.reply({ embeds: [embed] });
    }

    embed.setTitle("Help Compo th7");
    embed.setDescription("gg");
    embed
      .addFields(
        {
          name: "h",
          value: "h",
        },
        {
          name: "h",
          value: "h",
        },
        {
          name: "h",
          value: "h",
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
};*/
