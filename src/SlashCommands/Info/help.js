const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "help",
  description: "Shows the help page!",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Help Menu")
      .setDescription(
        `**Here is Help page of 1215 DATA BOT**\n__Small information:__ your credits are named "token", they are represented by the following logo: ` +
          emoji(emo.token)
      )
      .addFields(
        {
          name: emoji(emo.info) + " Infos",
          value:
            `\`/user\` In game info on a user\n\`/top\` Wallet Stats\n\`/buy\` Shop of 1215 Kingdom \n\n\`/kdteam\`: Kingdom team list\n\`/token\` See credit Anana_Token\n\`/social\` Social Network\n\n` +
            emoji(emo.police) +
            ` **Data_Team_Command**\n\`/helpadmin\` Admin commands list`,
        },
        {
          name:
            emoji(emo.update) +
            " " +
            emoji(emo.googlesheetsicon) +
            " Google Sheet interactions",
          value:
            "`/add` add you on google sheet\n`/update` Update your in game info",
        },
        {
          name: emoji(emo.tips) + " Tips",
          value:
            "Commander List + Talent tree :\n`/tips_infantry`\n`/tips_cavalry`\n`/tips_archery`\n`/tips_leadership`\n`/tips_integration`\n\n`/tips_skill`: Tips on best skill ditribution\n`/tips_civilisation`: Tips on civilisation",
          inline: true,
        }
      )
      .setColor("GREEN")
      .setThumbnail(
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
      )
      .setFooter({
        text: "RuBy_1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
      })
      .setTimestamp(Date.now());

    return interaction.reply({ embeds: [embed] });
  },
};
