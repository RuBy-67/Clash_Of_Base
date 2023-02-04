const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "buy",
  description: "Shop of 1215 Kingdom",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("1215 Shopping ")
      .setDescription("🛠️ More Commands Buy in build")
      .addFields(
        {
          name: "Ressources",
          value:
            `>>> **Mixed :** Cost \`3\` ` +
            emoji(emo.token) +
            `/ 100m __Distribution :__ ->🌽 \`30m\`,🪵 \`30m\`,🪨 \`25m\`,🪙 \`15m\`,\n**Rss :** Cost \`9\` ` +
            emoji(emo.token) +
            `/ 100m Choose 2 type between🌽,🪨,🪵,🪙 __Distribution :__ \`50/50\``,
        },
        {
          name: "Trophy",
          value:
            `>>> ` +
            emoji(emo.green) +
            ` Commons Trophy : \`1\` ` +
            emoji(emo.token) +
            `\n` +
            emoji(emo.blue) +
            ` Elite Trophy : \`3\` ` +
            emoji(emo.token) +
            `\n` +
            emoji(emo.epic) +
            ` Epics Trophy : \`4\` ` +
            emoji(emo.token) +
            `\n` +
            emoji(emo.gold) +
            ` Legendary Trophy : \`5\` ` +
            emoji(emo.token),
        },
        {
          name: "Mge Bids_Minimum Entry",
          value:
            `>>> **1st:** \`70\` ` +
            emoji(emo.token) +
            `** | 2nd:** \`45\` ` +
            emoji(emo.token) +
            `\n**3rd:** \`30\` ` +
            emoji(emo.token) +
            `** | 4th:** \`25\` ` +
            emoji(emo.token) +
            `\n**5th:** \`20\` ` +
            emoji(emo.token) +
            `** | 6th:** \`15\` ` +
            emoji(emo.token) +
            `\n**7-10:** \`10\` ` +
            emoji(emo.token) +
            `** | 11-15:** \`5\` ` +
            emoji(emo.token),
          inline: true,
        },
        {
          name: "_",
          value:
            "Look in <#955160709749174348> for complete details and add your bid",
          inline: true,
        }
      )
      .setColor("GREEN")
      .setFooter({
        text: "1215",
        iconURL:
          "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=90",
      });

    return interaction.reply({ embeds: [embed] });
  },
};
