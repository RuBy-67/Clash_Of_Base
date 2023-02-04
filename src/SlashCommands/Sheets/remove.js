module.exports = {
  name: "rmuser",
  description:
    "Removes a user from the sheet!(MAIN / FARM / BlackList ) `[Data_Team_Only]`",
  userPerms: ["MANAGE_MESSAGES"],
  options: [
    {
      name: "type",
      description: "Main, Farm, Black List",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "main_list",
          value: "main_list",
        },
        {
          name: "farm_list",
          value: "farm_list",
        },
        {
          name: "black_list",
          value: "black_list",
        },
      ],
    },
    {
      name: "user",
      description: "Removes a user form the sheet! (Administrator)",
      type: "USER",
      required: false,
    },
    {
      name: "govid",
      description: "Removes a user form the sheet! (Administrator)",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    const user = await interaction.options.getUser("user");
    const choices = await interaction.options.getString("type");
    const IgId = await interaction.options.getString("govid");
    let username;
    if (user == null) {
      username = 1215;
    }
    if (user != null) {
      username = user.id;
    }

    if (choices === "main_list") {
      const range1 = "Sheet1!A:A";
      const rows = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: range1,
      });

      const data = rows.data.values.find((row) => row[0] === username);

      if (!data) {
        return interaction.reply("User is not in the **Main Account list!**");
      }

      let toDeleteRow;

      for (let i = 0; i < rows.data.values.length; i++) {
        const row = rows.data.values[i];
        if (row[0] === username) {
          toDeleteRow = i;
        }
      }

      await client.googleSheets
        .batchUpdate({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          resource: {
            requests: [
              {
                deleteDimension: {
                  range: {
                    sheetId: 0,
                    dimension: "ROWS",
                    startIndex: toDeleteRow,
                    endIndex: toDeleteRow + 1,
                  },
                },
              },
            ],
          },
        })
        .catch(console.error);

      return interaction.reply("User has been removed from the **MAIN list!**");
    } else if (choices === "farm_list") {
      const range2 = "Sheet2!A:A";
      const rows2 = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: range2,
      });
      const data2 = rows2.data.values.find((row) => row[0] === username);
      if (!data2) {
        return interaction.reply("User is not in **FARM the list!**");
      }

      let toDeleteRow2;

      for (let i = 0; i < rows2.data.values.length; i++) {
        const row2 = rows2.data.values[i];
        if (row2[0] === username) {
          toDeleteRow2 = i;
        }
      }

      await client.googleSheets
        .batchUpdate({
          auth: client.auth,
          spreadsheetId: client.sheetId,
          resource: {
            requests: [
              {
                deleteDimension: {
                  range: {
                    sheetId: 861498950,
                    dimension: "ROWS",
                    startIndex: toDeleteRow2,
                    endIndex: toDeleteRow2 + 1,
                  },
                },
              },
            ],
          },
        })
        .catch(console.error);

      return interaction.reply("User has been removed from the **FARM List!**");
    } else {
      const range3 = "Sheet3!A:C";
      const rows3 = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: range3,
      });

      const data3 = rows3.data.values.find((row) => row[1] === IgId);
      const data4 = rows3.data.values.find((row) => row[0] === username);

      if (data3 || data4) {
        let toDeleteRow3;

        for (let i = 0; i < rows3.data.values.length; i++) {
          const row3 = rows3.data.values[i];
          if (row3[0] === username || row3[1] === IgId) {
            toDeleteRow3 = i;
          }
        }

        await client.googleSheets
          .batchUpdate({
            auth: client.auth,
            spreadsheetId: client.sheetId,
            resource: {
              requests: [
                {
                  deleteDimension: {
                    range: {
                      sheetId: 482263448,
                      dimension: "ROWS",
                      startIndex: toDeleteRow3,
                      endIndex: toDeleteRow3 + 1,
                    },
                  },
                },
              ],
            },
          })
          .catch(console.error);

        return interaction.reply(
          "User has been removed from the **Black List!**"
        );
      } else {
        return interaction.reply("User is not in the **Black list!**");
      }
    }
  },
};
