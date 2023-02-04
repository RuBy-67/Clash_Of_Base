const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "user",
  description: "See info of user `[User]`",
  options: [
    {
      name: "user",
      description: "The user to check",
      type: "USER",
      required: true,
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const user = await interaction.options.getUser("user");
    const userid = await user.id;
    const choices = await interaction.options.getString("table");

    const rows1 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:U",
    });
    const data1 = rows1.data.values.find((row) => row[0] === userid);
    const embed1 = new MessageEmbed();
    if (data1) {
      if (rows1.data.values.length > 0) {
        for (let i = 0; i < rows1.data.values.length; i++) {
          const row = rows1.data.values[i];
          if (row[0] === userid) {
            embed1.setTitle(`${row[1]} - ${row[2]}`);
            embed1.setColor("#00FFDB");
            embed1.setThumbnail(user.displayAvatarURL());
            embed1.setDescription("__**Main Account**__");
            embed1.addFields({
              name: `${row[2]}`,
              value:
                `__Rok Id:__ **${row[3]}**\n__Power:__ **${row[4]}**` +
                emoji(emo.sword) +
                `\n__Kill:__ **${row[5]}** ` +
                emoji(emo.skull) +
                `\n\n__Credits Spent:__ **${row[19]}** :money_with_wings: \n__Credits Penalities:__ **${row[20]}** :warning:\n\n__Current Credits:__ **${row[7]}**` +
                emoji(emo.token) +
                `\n_`,
              inline: true,
            });

            embed1.setTimestamp(Date.now());
            embed1.setFooter({
              text: `${row[2]}`,
              iconURL:
                "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
            });
          }
        }
      }
    }

    const rows2 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet2!A:H",
    });

    const data2 = rows2.data.values.find((row) => row[0] === userid);
    const embed2 = new MessageEmbed();
    if (data2) {
      if (rows2.data.values.length > 0) {
        for (let i = 0; i < rows2.data.values.length; i++) {
          const row = rows2.data.values[i];
          if (row[0] === userid) {
            embed2.setTitle(`${row[1]} - ${row[2]}`);
            embed2.setColor("#daa520");
            embed2.setThumbnail(user.displayAvatarURL());
            embed2.setDescription("__**FARM Account**__");
            embed2.addFields({
              name: `${row[2]}`,
              value:
                `__Rok Id:__ **${row[3]}**\n__Power:__ **${row[4]}**` +
                emoji(emo.sword) +
                `\n__Kill:__ **${row[5]}** ` +
                emoji(emo.skull) +
                `\n__Credits:__ **${row[7]}** ` +
                emoji(emo.token) +
                `\n_`,
              inline: true,
            });

            embed2.setTimestamp(Date.now());
            embed2.setFooter({
              text: `${row[2]}`,
              iconURL:
                "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
            });
          }
        }
      }
    }

    const rows3 = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet3!A:H",
    });
    const data3 = rows3.data.values.find((row) => row[0] === userid);
    const embed3 = new MessageEmbed();
    if (data3) {
      if (rows3.data.values.length > 0) {
        for (let i = 0; i < rows3.data.values.length; i++) {
          const row = rows3.data.values[i];
          if (row[0] === userid) {
            embed3.setTitle(`${row[1]} - ${row[2]}`);
            embed3.setColor("#8b2d2d");
            embed3.setThumbnail(user.displayAvatarURL());
            embed3.setDescription("__**Black_Listed**__");
            embed3.addFields(
              {
                name: emoji(emo.discord) + " User :",
                value: `__**ID: **__<@${row[0]}>`,
              },
              {
                name: emoji(emo.books) + " In Game Info :",
                value: `__InGame Name :__ ${row[2]}\n __Rok Id:__ ${row[1]}`,
              },
              {
                name: "Current Power :",
                value: `${row[4]}. ` + emoji(emo.sword),
                inline: true,
              },
              {
                name: " Current Kill Power :",
                value: `${row[5]}. ` + emoji(emo.skull),
              },
              {
                name: emoji(emo.ban) + "Reason of Ban",
                value: `${row[6]}. `,
              }
            );

            embed3.setTimestamp(Date.now());
            embed3.setFooter({
              text: `${row[2]}`,
              iconURL:
                "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
            });
          }
        }
      }
    }
    /// verification des cas de figure SI
    if (!data1 && !data2 && !data3) {
      return interaction.reply("nothing");
    }
    if (data1 && !data2 && !data3) {
      return interaction.reply({ embeds: [embed1] });
    }
    if (!data1 && !data2 && data3) {
      return interaction.reply({ embeds: [embed3] });
    }
    if (!data1 && data2 && !data3) {
      return interaction.reply({ embeds: [embed2] });
    }
    if (!data1 && data2 && data3) {
      return interaction.reply({ embeds: [embed2, embed3] });
    }
    if (data1 && data2 && data3) {
      return interaction.reply({ embeds: [embed1, embed2, embed3] });
    }
    if (data1 && data2 && !data3) {
      return interaction.reply({ embeds: [embed1, embed2] });
    }
    if (data1 && !data2 && data3) {
      return interaction.reply({ embeds: [embed1, embed3] });
    }
  },
};
