const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "rssdonation",
  userPerms: ["MANAGE_MESSAGES"],
  description: "update Rss Donation of Users `[Data_Team_Only]`",
  options: [
    {
      name: "type",
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
    {
      name: "rss",
      description: "Rss Types",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "food",
          value: "food",
        },
        {
          name: "wood",
          value: "wood",
        },
        {
          name: "stone",
          value: "stone",
        },
        {
          name: "gold",
          value: "gold",
        },
      ],
    },
    {
      name: "bag",
      description: "How many ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "100M",
          value: "1",
        },
        {
          name: "200M",
          value: "2",
        },
        {
          name: "300M",
          value: "3",
        },
        {
          name: "400M",
          value: "4",
        },
        {
          name: "500M",
          value: "5",
        },
        {
          name: "600M",
          value: "6",
        },
        {
          name: "700M",
          value: "7",
        },
        {
          name: "800M",
          value: "8",
        },
        {
          name: "900M",
          value: "9",
        },
        {
          name: "1B",
          value: "10",
        },
      ],
    },
    {
      name: "user",
      description: "The user to update to the spreadsheet",
      type: "USER",
      required: false,
    },
    {
      name: "rokid",
      description: "in Game Id of player",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const user = await interaction.options.getUser("user");
    const Rss = await interaction.options.getString("rss");
    const bag = await interaction.options.getString("bag");
    const IgId = await interaction.options.getString("rokid");
    const choices = await interaction.options.getString("type");
    let username;
    let id;
    //---------------------------
    if (user == null) {
      username = 1215;
      id = 1215;
    }
    if (user != null) {
      id = user.id;
      username = user.username + "#" + user.discriminator;
    }
    //----------------------
    let credits;
    if (Rss === "wood" || Rss == "food") {
      credits = bag * 1;
    }

    if (Rss === "stone") {
      credits = bag * 2;
    }

    if (Rss === "Gold") {
      credits = bag * 3;
    }

    if (choices === "main_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:J",
      });

      const data = rows.data.values;
      const Index1 = data.findIndex((row) => row[3] === IgId);
      const matchingRow1 = data.find((row) => row[3] === IgId);
      const rowIndex = data.findIndex((row) => row[0] === id);
      const matchingRow2 = data.find((row) => row[0] === id);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          `User: ${username} / Id: ${IgId} not found, please enter a other User or Gov Id`
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet1!J${Index1 + 1}:J${Index1 + 1}`;
        const value1 = matchingRow1[9];
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[`=${value1}+` + credits]],
          },
        });
        return interaction.reply(
          `<@${matchingRow1[0]}>, id: [${matchingRow1[3]}] Credit has been updated successfully ! with **${credits}**`
        );
      } else if (rowIndex != -1) {
        const matchingRows = data.filter((row) => row[0] === id);

        const rowCount = matchingRows.length;
        if (rowCount > 1) {
          const embed = new MessageEmbed();
          embed.setTitle(username);
          embed.setColor("#00FFDB");
          embed.setDescription(
            "More than one account please make the change with gov id, here is the list of accounts linked with this user"
          );
          embed.setTimestamp(Date.now());
          embed.setFooter({
            text: username,
            iconURL:
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
          });
          for (const row of matchingRows) {
            embed.addField(
              emoji(emo.ally) + `__Name__: **${row[2]}**`,
              emoji(emo.sword) +
                `__Power :__ **${row[4]}** __Id :__ **${row[3]}**\n**_**`
            );
          }
          return interaction.reply({ embeds: [embed] });
        } else if (rowCount == 1) {
          const range2 = `Sheet1!J${rowIndex + 1}:J${rowIndex + 1}`;
          const value2 = matchingRow2[9];
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[`=${value2}+` + credits]],
            },
          });
          return interaction.reply(
            `<@${matchingRow2[0]}>, id: [${matchingRow2[3]}] Credits has been updated successfully ! with **${credits}** credits`
          );
        }
      }
    } else if (choices === "farm_account") {
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet2!A:E",
      });
      const data = rows.data.values;
      const Index1 = data.findIndex((row) => row[3] === IgId);
      const rowIndex = data.findIndex((row) => row[0] === id);
      const matchingRow1 = data.find((row) => row[3] === IgId);
      const matchingRow2 = data.find((row) => row[0] === id);

      if (rowIndex == -1 && Index1 == -1) {
        return interaction.reply(
          `User: ${username} / Id: ${IgId} not found, please enter a other User or Gov Id`
        );
      } else if (Index1 != -1) {
        const range1 = `Sheet2!J${Index1 + 1}:J${Index1 + 1}`;
        const value1 = matchingRow1[9];
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: range1,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[`=${value1}+` + credits]],
          },
        });
        return interaction.reply(
          `<@${matchingRow1[0]}>, id: [${matchingRow1[3]}]  Credits has been updated successfully ! with **${credits}** ` +
            emoji(emo.token)
        );
      } else if (rowIndex != -1) {
        const matchingRows = data.filter((row) => row[0] === id);
        const rowCount = matchingRows.length;
        if (rowCount > 1) {
          const embed = new MessageEmbed();
          embed.setTitle(username);
          embed.setColor("#daa520");
          embed.setDescription(
            "More than one account please make the change with gov id, here is the list of farm accounts linked with this User"
          );
          embed.setTimestamp(Date.now());
          embed.setFooter({
            text: username,
            iconURL:
              "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
          });
          for (const row of matchingRows) {
            embed.addField(
              `:corn: __Name__: **${row[2]}**`,
              emoji(emo.sword) +
                `__Power :__ **${row[4]}** __Id :__ **${row[3]}**\n**_**`
            );
          }
          return interaction.reply({ embeds: [embed] });
        } else if (rowCount == 1) {
          const range2 = `Sheet2!J${rowIndex + 1}:J${rowIndex + 1}`;
          const value2 = matchingRow2[9];
          await client.googleSheets.values.update({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            range: range2,
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [[`=${value2}+` + credits]],
            },
          });
          return interaction.reply(
            `<@${matchingRow2[0]}>, id: [${matchingRow2[3]}]  Credits for has been updated successfully ! with **${credits}** ` +
            emoji(emo.token)
          );
        }
      }
    }
  },
};
