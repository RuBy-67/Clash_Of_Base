const emo = require("../../jsons/emoji.json");
const config = require(`../../jsons/config.json`);
const Discord = require("discord.js");
const CoC = require("clash-of-clans-api");
const api_client = new CoC({
  token: config.ClashApi,
});
module.exports = {
  name: "profile",
  description: "Take more Information on a Player profile",
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
    function randomLink() {
      //Thumbail aléatoire la première (pdp originale) a 75% de chance de sortir les autres on  25% / le nombre d'image)
      const links = [
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073020978935906404/RuBy_an_archer_inspired_by_the_clash_of_clans_universe_with_pin_8e5d04fe-e1bb-401b-bb73-31f5754356b7.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335784796594316/DALLE_2023-02-09_00.08.20_-_complete_this_with_black_hair_in_wind_and_small_dead_head_in_their_hair_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785090199552/DALLE_2023-02-09_00.44.15_-_Skull_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785559957554/DALLE_2023-02-09_00.04.28_-_complete_this_image_with_red_hair_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785929060433/DALLE_2023-02-09_00.06.14_-_complete_this_image_with_blue_hair_in_wind_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335786235252876/DALLE_2023-02-09_00.47.35_-_a_Robot_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335786545623112/DALLE_2023-02-09_00.47.50_-_a_Robot_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335787090890762/DALLE_2023-02-09_00.45.59_-_Cyborg_.png",
      ];

      const randomNumber = Math.random() * 100;
      if (randomNumber <= 75) {
        return links[0];
      } else {
        const index = Math.floor(
          ((randomNumber - 75) / (100 - 75)) * (links.length - 1) + 1
        );
        return links[index];
      }
    }
    const values = [
      4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94,
      99,
    ];
    const tag = await interaction.options.getString("tag");
    let error = new Discord.MessageEmbed()
      // Message D'erreurs
      .setDescription(
        "Error - Please provide a correct Tag\nTry :",
        "`/player`"
      )
      .setColor(config.color_error)
      .setFooter({
        text: "ClashOfBase",
        iconURL: client.user.displayAvatarURL(),
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
    let e = new Discord.MessageEmbed();
    api_client
      .playerByTag(tag)
      .catch((err) => {
        interaction.reply({ embeds: [error] });
      })
      .then((response) => {
        const embed = new Discord.MessageEmbed();
        var descriptiontroupe = "";
        var descriptionmdo = "";
        for (let i = 0; i < response.troops.length; i++) {
          var nom = `${response.troops[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.troops[i].level;
          const max = response.troops[i].maxLevel;
          if (response.troops[i].village == "builderBase") {
            descriptionmdo += `${emoj} ${level} /${max}`;
            if (values.includes(i)) {
              descriptionmdo += "\n";
            }
          } else {
            descriptiontroupe += `${emoj} ${level} /${max}`;
            if (values.includes(i)) {
              descriptiontroupe += "\n";
            }
          }
        }
        var descriptionspell = "";
        for (let i = 0; i < response.spells.length; i++) {
          var nom = `${response.spells[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.spells[i].level;
          const max = response.spells[i].maxLevel;
          descriptionspell += `${emoj} ${level} /${max}`;
          if (values.includes(i)) {
            descriptionspell += "\n";
          }
        }
        var descriptionshero = "";
        for (let i = 0; i < response.heroes.length; i++) {
          if (response.heroes[i].name === undefined) continue;
          var nom = `${response.heroes[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.heroes[i].level;
          const max = response.heroes[i].maxLevel;
          descriptionshero += `${emoj} ${level} /${max}`;
          if (i === 1) {
            descriptionshero += "\n";
          }
        }
        embed.setTitle("**" + response.name + " - Advanced**");
        embed.setURL(
          "https://link.clashofclans.com/?action=OpenPlayerProfile&tag=%" +
            response.tag.replace("#", "23")
        );
        embed.setColor(config.colorPink);
        embed.setThumbnail(`${randomLink()}`);
        embed.setDescription("**Troops :**\n" + descriptiontroupe);
        embed.addFields(
          {
            name: "Spell :",
            value: descriptionspell,
          },
          {
            name: "Troops Builder Base:",
            value: descriptionmdo,
          },
          {
            name: "Hero :",
            value: descriptionshero,
          }
        );
        return interaction.reply({ embeds: [embed] });
      });
  },
};
