const { MessageEmbed, Message, Channel } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
module.exports = {
  name: "addcredits",
  description:
    "Give Bonus to a user Users `[Data_Team_Only]`, `[Main_account]` / `[Main_account]`",
  userPerms: ["MANAGE_MESSAGES"],
  options: [
    {
      name: "amount",
      description: "amount of credits",
      type: "STRING",
      required: true,
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
    {
      name: "give",
      description:
        "give to ? if you choose 'give' don't select user and rok id",
      required: false,
      type: "STRING",
      choices: [
        {
          name: "all", /// tout les membres du kd les crédit vont dans les point "bonus"
          value: "all",
        },
        {
          name: "leader_ship", // tout les membres R4
          value: "leader_ship",
        },
        {
          name: "data_team", //  tout les membres faisant partie de la team data team
          value: "data_team",
        },
        {
          name: "post_office_team", //  tout les membres faisant partie de la post office
          value: "post_office_team",
        },
        {
          name: "title_giver_team", //  tout les membres faisant partie de la tittle giver
          value: "title_giver_team",
        },
        {
          name: "kingdom_event_team", //  tout les membres faisant partie de la kd event
          value: "kingdom_event_team",
        },
        {
          name: "kvk_team", //  tout les membres faisant partie de la kvk team
          value: "kvk_team",
        },
        {
          name: "punishement_teams", //  tout les membres faisant partie de la punishement teams
          value: "punishement_teams",
        },
        {
          name: "staff_ark_team",
          value: "Staff ark_team", //  tout les membres faisant partie de la staff ark team
        },
        {
          name: "mge_team",
          value: "mge_team", //  tout les membres faisant partie du MGE team
        },
        /* {
          name: "member_ark_team",
          value: "member_ark_team", //Member with ark team role id 1047194574247972904
        },*/
      ],
    },
  ],
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const credits = await interaction.options.getString("amount");
    const give = await interaction.options.getString("give");
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
    if (user != null || IgId != null) {
      if (Index1 != -1) {
        const range1 = `Sheet1!L2${Index1 + 1}:L${Index1 + 1}`;
        const value1 = matchingRow1[11];
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
          `User credit of **${IgId}** as been updated with **${credits}** ` +
            emoji(emo.token)
        );
      } else if (rowIndex != -1) {
        const matchingRows = data.filter((row) => row[0] === id);
        const rowCount = matchingRows.length;
        if (rowCount > 1) {
          const embed = new MessageEmbed();
          embed.setTitle(username);
          embed.setColor("#00FFDB");
          embed.setDescription(
            "More than one account please make the change with your gov id, here is the list of your accounts"
          );
          embed.setTimestamp(Date.now());
          embed.setFooter({
            text: "1215",
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
          const range2 = `Sheet1!L2${rowIndex + 1}:L${rowIndex + 1}`;
          const value2 = matchingRow2[11];
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
            `User credit of <@${id}> as been updated with **${credits}** ` +
              emoji(emo.token)
          );
        }
      }
    }
    //----------User / GovID---------------
    //------------ALL---------------
    else if (give == "all") {
      let currentValues = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "sheet1!L2:L",
      });
      if (!currentValues.data.values)
        return interaction.reply("There is no value to update!");

      let updateValues = currentValues.data.values.map((row) => [
        "=" + row[0] + "+" + credits,
      ]);
      await client.googleSheets.values.update({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "sheet1!L2:L",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: updateValues,
        },
      });
      return interaction.reply("User credit has been updated successfully!");
    }
    //----------------ALL------------------

    //----------R4 Bonus-------------------
    else if (give == "leader_ship") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:W",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[22] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[10] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!K${row.rowIndex}:K`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------R4 Bonus-------------------
    //----------dataTeam Bonus--------------
    else if (give == "data_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AB",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[27] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> in ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------dataTeam Bonus---------------
    //----------Post User Bonus---------------
    else if (give == "post_office_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[30] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------Post User Bonus----------------
    //----------Tittle Giver Bonus-------------
    else if (give == "title_giver_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[23] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------Tittle Giver Bonus--------------
    //----------Kd event team Bonus-------------
    if (give == "kingdom_event_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[28] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits}` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------Kd event team Bonus-------------
    //----------KvK team Bonus-------------------
    else if (give == "kvk_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[29] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------KvK team Bonus-------------------
    //----------Punishment teams Bonus------------
    else if (give == "punishement_teams") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[25] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------Punishment teams Bonus------------
    //----------Staff Ark team------------
    else if (give == "staff_ark_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AE",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[24] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------Staff ark team------------
    //----------Mge management--------------
    else if (give == "mge_team") {
      interaction.reply(emoji(emo.flam));
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet1!A:AB",
      });
      const data = rows.data.values;
      const matching = data
        .map((row, index) => {
          return { ...row, rowIndex: index + 1 };
        })
        .filter((row) => row[26] === "yes");

      for (const row of matching) {
        const newValue = "=" + row[11] + "+" + credits;
        await client.googleSheets.values.update({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          range: `Sheet1!L${row.rowIndex}:L`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[newValue]],
          },
        });
        interaction.channel.send(
          `User credit of <@${row[0]}> in ${give} as been updated with ${credits} ` +
            emoji(emo.token)
        );
      }
      return interaction.channel.send(
        `**User credit of all ${give} as been updated**`
      );
    }
    //----------MGE Management---------------
    else {
      return interaction.reply("0 User found");
    }
  },
};
