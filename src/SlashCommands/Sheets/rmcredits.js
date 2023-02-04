const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "rmcredits",
  description: "Remove credit from user `[Data_Team_Only]`, `[Main_account]`",
  userPerms: ["MANAGE_MESSAGES"],
  options: [
    {
      name: "amount",
      description: "amount of credits to delete",
      type: "STRING",
      required: true,
    },
    {
      name: "case",
      description: "buy or penalities",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "buy", //
          value: "buy",
        },
        {
          name: "penalities", //
          value: "pena",
        },
      ],
    },
    {
      name: "user",
      description: "The user to delete credits on the spreadsheet",
      type: "USER",
      required: false,
    },
    {
      name: "rokid",
      description: "in Game Id of player to delete credits on the spreadsheet",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const credits = await interaction.options.getString("amount");
    const give = await interaction.options.getString("case");
    const user = await interaction.options.getUser("user");
    const IgId = await interaction.options.getString("rokid");
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

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet1!A:AE",
    });

    const data = rows.data.values;
    const Index1 = data.findIndex((row) => row[3] === IgId);
    const matchingRow1 = data.find((row) => row[3] === IgId);
    const rowIndex = data.findIndex((row) => row[0] === id);
    const matchingRow2 = data.find((row) => row[0] === id);
    //----------User / GovID------------
    if (rowIndex == -1 && Index1 == -1) {
      return interaction.reply(
        "User not found, please enter a other User or Gov Id"
      );
    }
    if (user != null || IgId != null) {
      if (give == "buy") {
        if (Index1 != -1) {
          const range1 = `Sheet1!T2${Index1 + 1}:T${Index1 + 1}`;
          const value1 = matchingRow1[19];
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
            `${credits} credit has been deleted from ${IgId} for buy reason`
          );
        } else if (rowIndex != -1) {
          const matchingRows = data.filter((row) => row[0] === id);
          const rowCount = matchingRows.length;
          if (rowCount > 1) {
            const embed = new MessageEmbed();
            embed.setTitle(username);
            embed.setColor("#00FFDB");
            embed.setDescription(
              "More than one account please make the change with gov id, here is the list of accounts linked"
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
            const range2 = `Sheet1!T2${rowIndex + 1}:T${rowIndex + 1}`;
            const value2 = matchingRow2[19];
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
              `${credits} ` +
                emoji(emo.token) +
                ` has been deleted from <@${id}> for ${give}`
            );
          }
        }
      }
      if (give == "pena") {
        if (Index1 != -1) {
          const range1 = `Sheet1!U2${Index1 + 1}:U${Index1 + 1}`;
          const value1 = matchingRow1[20];
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
            `${credits} ` +
              emoji(emo.token) +
              ` has been deleted from ${IgId} for ${give}`
          );
        } else if (rowIndex != -1) {
          const matchingRows = data.filter((row) => row[0] === id);
          const rowCount = matchingRows.length;
          if (rowCount > 1) {
            const embed = new MessageEmbed();
            embed.setTitle(username);
            embed.setColor("#00FFDB");
            embed.setDescription(
              "More than one account please make the change with gov id, here is the list of accounts"
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
            const range2 = `Sheet1!U2${rowIndex + 1}:U${rowIndex + 1}`;
            const value2 = matchingRow2[20];
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
              `${credits} ` +
                emoji(emo.token) +
                ` has been deleted from **<@${id}>** for penalities`
            );
          }
        }
      }
    }
  },
};
