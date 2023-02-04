const emo = require(`../../jsons/emoji.json`);
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addbl",
  description: "Adds a user on the Black List ! `[Data_Team_Only]`",
  userPerms: ["MANAGE_MESSAGES"],
  options: [
    {
      name: "addedby",
      description: "Added by :",
      type: "USER",
      required: true,
    },
    {
      name: "rokname",
      description: "in Game Name of player",
      type: "STRING",
      required: true,
    },
    {
      name: "power",
      description: "Current power of the player",
      type: "STRING",
      required: true,
    },
    {
      name: "rokid",
      description: "in Game Id of player",
      type: "STRING",
      required: true,
    },
    {
      name: "discordid",
      description: "The user to add to the spreadsheet",
      type: "STRING",
      required: false,
    },
    {
      name: "killpower",
      description: "Curent Kill power of the player",
      type: "STRING",
      required: false,
    },
    {
      name: "reason",
      description: "Reason of Blacklisted player",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction, args) => {
    const user = await interaction.options.getString("discordid");
    const IgN = await interaction.options.getString("rokname");
    const IgId = await interaction.options.getString("rokid");
    const power = await interaction.options.getString("power");
    const Kpower = await interaction.options.getString("killpower");
    const reason = await interaction.options.getString("reason");
    const added = await interaction.options.getUser("addedby");
    const addedby = (await added.username) + "#" + added.discriminator;
    const id = await added.id;

    const rows = await client.googleSheets.values.get({
      auth: client.auth,
      spreadsheetId: client.sheetId,
      range: "Sheet3!A:H",
    });

    const data = rows.data.values.find((row) => row[2] === IgId);
    if (data) {
      return interaction.reply("User has already in BlackList");
    } else if (!data) {
      await client.googleSheets.values.append({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet3!A:G",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[user, IgId, IgN, power, Kpower, reason, addedby]],
        },
      });
      function emoji(id) {
        return client.emojis.cache.get(id).toString();
      }
      const channelId = "1059791943552487504";
      const ban = await client.googleSheets.values.get({
        auth: client.auth,
        spreadsheetId: client.sheetId,
        range: "Sheet3!I1:I1",
      });
      const valu = ban.data.values;

      const embed = new MessageEmbed();
      embed.setTitle("New Winner");
      embed.setDescription("New Player in Black List");
      embed.setColor("#FF0000");
      embed.setTimestamp(Date.now());
      embed.addFields(
        {
          name: emoji(emo.books) + " In Game Info :",
          value: `__**Name: **__${IgN}\n __**Rok Id:**__ ${IgId}\n__**Power:**__ ${power}\n<@${user}>`,
          inline: true,
        },
        {
          name: "Added by :",
          value: `<@${id}>`,
          inline: false,
        },
        {
          name: ":book: Reason",
          value: `${reason}.`,
          inline: false,
        },
        {
          name: "👤 People ban",
          value: `${valu[0]}`,
          inline: false,
        }
      );
      embed.setFooter({
        text: `${IgN}`,
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      });
      const channel = client.channels.cache.get(channelId);
      channel.send({ embeds: [embed] });
      return interaction.reply(
        `User as been added and message sent into <#1059791943552487504>`
      );
    }
  },
};
