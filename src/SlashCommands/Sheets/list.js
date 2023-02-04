const { MessageEmbed, Interaction } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "list",
  description:
    "Shows all the users on list (BlackList / Main / FARM! `[Data_Team_Only]`",
  userPerms: ["MANAGE_MESSAGES"],
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
        {
          name: "blacklist",
          value: "blacklist",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    const choices = await interaction.options.getString("list");
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    let type;
    if (choices == "main_account") {
      type = "Sheet1!A2:H";
    }
    if (choices == "farm_account") {
      type = "Sheet2!A2:H";
    }

    if (choices == "blacklist") {
      type = "Sheet3!A2:H";
    }

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: type,
    });
    if (rows.data.values.length > 0) {
      const embeds = [];
      for (let i = 0; i < rows.data.values.length; i++) {
        const row = rows.data.values[i];
        const embed = new MessageEmbed();
        embed.setColor("GREEN");
        embed.setDescription("Type `/user` for more infomation");
        embed.addField(
          `¤ ${row[1]}`,
          emoji(emo.tag) +
            ` **In game Name:** ${row[2]}\n` +
            emoji(emo.ally) +
            ` **In game id:** ${row[3]}\n` +
            emoji(emo.token) +
            ` **Credits:** ${row[7]}`
        );
        embeds.push(embed);
        if ((i + 1) % 25 === 0 || i === rows.data.values.length - 1) {
          for (let i = 0; i < embeds.length; i += 10) {
            await await interaction.channel.send({
              embeds: embeds.slice(i, i + 10),
            });
          }
          embeds.length = 0;
        }
      }
    }
  },
};
