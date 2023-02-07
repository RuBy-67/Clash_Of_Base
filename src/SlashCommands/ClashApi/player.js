const emo = require("/src/jsons/emoji.json");
const config = require("/src/jsons/config.json");
const Discord = require("discord.js");
const clashAPI = require("clash-of-clans-api");
let api_client = clashAPI({
  token: clashAPI,
});
module.exports = {
  name: "player",
  description: "Take Information on a Player",
  options: [
    {
      name: "tag",
      description: "Player Tag",
      type: "STRING",
      required: true,
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const tag = await interaction.options.getString("tag");
    let error = new Discord.MessageEmbed()
      // Message D'erreurs 
      .setDescription("Error - Please provide a correct Tag\nTry :", "`/player`")
      .setColor("#fb2929")
      .setFooter({
      text: "ClashOfBase",
      iconURL: client.user.displayAvatarURL()
      });
    if (
      !tag ||
      tag === " " ||
      tag === undefined ||
      tag === null ||
      tag === "" ||
      !tag[0]
    ) {
      return interaction.reply({ embeds: [error] });
    }
    
    api_client
      .playerByTag(tag)
      .catch(err => { interaction.reply({ embeds: [error] }) })
      .then(response => { 


      })
  },
};
