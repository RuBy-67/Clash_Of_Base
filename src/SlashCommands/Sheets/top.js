const { MessageEmbed, Interaction } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "top",
  description: "top stats of 1215 Wallet `",
  options: [
    {
      name: "list",
      description: "Main or Farm Account",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "main_account",
          value: "main_account",
        },
        {
          name: "farm_account",
          value: "farm_account",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    const choices = await interaction.options.getString("list");
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    if (choices == "main_account") {
      const { data } = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!AF2:AF8",
      });
      const valu = data.values;
      const embed = new MessageEmbed();

      embed.setColor("GREEN");
      embed.setDescription("Stats About Wallet on `MAIN_ACCOUNT_LIST`");
      embed.addFields(
        {
          name: "Total",
          value:
            emoji(emo.sword) +
            ` __Wallet Power:__ **${valu[0]}**\n` +
            emoji(emo.skull) +
            `__Wallet Kill Power:__ **${valu[1]}**\n` +
            emoji(emo.token) +
            ` __Credits:__ **${valu[2]}**\n` +
            emoji(emo.lohar2) +
            ` __Users Registred:__ **${valu[3]}**`,
        },
        {
          name: "Average",
          value:
            emoji(emo.sword) +
            ` __Average Power:__ **${valu[4]}**\n` +
            emoji(emo.skull) +
            ` __Average Kill Power:__ **${valu[5]}**\n` +
            emoji(emo.token) +
            ` __Average Credits:__ **${valu[6]}**`,
        }
      );
      embed.setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      
      return interaction.reply({ embeds: [embed] });
    }
    if (choices == "farm_account") {
      const { data } = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet2!W2:W8",
      });
      const valu = data.values;
      const embed = new MessageEmbed();

      embed.setColor("#FFF400");
      embed.setDescription("Stats About Wallet on `FAR_ACCOUNT_LIST`");
      embed.addFields(
        {
          name: "Total",
          value:
            emoji(emo.sword) +
            `🌽 __Wallet Power:__ **${valu[0]}**\n` +
            emoji(emo.skull) +
            `🌽 __Wallet Kill Power:__ **${valu[1]}**\n` +
            emoji(emo.token) +
            `🌽 __Credits:__ **${valu[2]}**\n` +
            emoji(emo.lohar2) +
            `🌽 __Users Registred:__ **${valu[3]}**`,
        },
        {
          name: "Average",
          value:
            emoji(emo.sword) +
            `🌽 __Average Power:__ **${valu[4]}**\n` +
            emoji(emo.skull) +
            `🌽 __Average Kill Power:__ **${valu[5]}**\n` +
            emoji(emo.token) +
            `🌽 __Average Credits:__ **${valu[6]}**`,
        }
      );
      embed.setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      return interaction.reply({ embeds: [embed] });
    }
  },
};
