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
    const tag = await interaction.options.getString("tag");
    let error = new Discord.MessageEmbed()
      // Message D'erreurs
      .setDescription(
        "Error - Please provide a correct Tag\nTry :",
        "`/profile`"
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
        var descriptiontroupeRose = "";
        var descriptiontroupeNoire = "";
        var descriptionmdo = "";
        var descriptionmachine = ""; 
        var descriptionannimals = "";
        var descriptionspellRose = "";
        var descriptionspellNoire = "";
        var descriptionshero = "";
        var descriptiontroupeSuper = "";
        //troupe
        for (let i = 0; i < response.troops.length; i++) {
          var nom = `${response.troops[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.troops[i].level;
          const max = response.troops[i].maxLevel;
          //si Builder Base
          switch (true) {
            case response.troops[i].village === "builderBase":
              descriptionmdo += `${emoj} ${level} /${max}`;
              break;
            //Si machine de guerre
            case nom === "Wall Wrecker" ||
              nom === "Flame Flinger" ||
              nom === "Battle Blimp" ||
              nom === "Siege Barracks" ||
              nom === "Stone Slammer" ||
              nom === "Log Launcher":
              descriptionmachine += `${emoj} ${level} /${max}`;
              break;
            //Si animals
            case nom === "Frosty" ||
              nom === "L.A.S.S.I" ||
              nom === "Poison Lizard" ||
              nom === "Unicorn" ||
              nom === "Diggy" ||
              nom === "Phoenix" ||
              nom === "Mighty Yak" ||
              nom === "Electro Owl":
              descriptionannimals += `${emoj} ${level} /${max}`;
              break;
            case nom === "Minion" ||
              nom === "Hog Rider" ||
              nom === "Valkyrie" ||
              nom === "Golem" ||
              nom === "Witch" ||
              nom === "Bowler" ||
              nom === "Ice Golem" ||
              nom === "Hog Rider" ||
              nom === "Headhunter":
              descriptiontroupeNoire += `${emoj} ${level} /${max}`;
              break;
            case nom === "Super Giant" ||
              nom === "Rocket Balloon" ||
              nom === "Super Wall Breaker" ||
              nom === "Ice Hound" ||
              nom === "Super Witch" ||
              nom === "Super Archer" ||
              nom === "Super Bowler" ||
              nom === "Super Dragon" ||
              nom === "Super Minion" ||
              nom === "Super Wizard" ||
              nom === "Super Valkyrie" ||
              nom === "Inferno Dragon":
              descriptiontroupeSuper += `${emoj} ${level} /${max}`;
              break;
            default:
              descriptiontroupeRose += `${emoj} ${level} /${max}`;
              break;
          }
        }
        ///Si Sort
        for (let i = 0; i < response.spells.length; i++) {
          var nom = `${response.spells[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.spells[i].level;
          const max = response.spells[i].maxLevel;
          switch (true) {
            case nom === "Poison Spell" ||
              nom === "Earthquake Spell" ||
              nom === "Haste Spell" ||
              nom === "Skeleton Spell" ||
              nom === "Bat Spell":
              descriptionspellNoire += `${emoj} ${level} /${max}`;
            default:
              descriptionspellRose += `${emoj} ${level} /${max}`;
          }
        }
        //Si héros
        for (let i = 0; i < response.heroes.length; i++) {
          if (response.heroes[i].name === undefined) continue;
          var nom = `${response.heroes[i].name}`;
          const emoj = emoji(emo[nom]);
          const level = response.heroes[i].level;
          const max = response.heroes[i].maxLevel;
          descriptionshero += `${emoj} ${level} /${max}`;
          if (i === 1 || i === 3) {
            descriptionshero += "\n";
          }
        }
        var town;
        switch (response.townHallLevel) {
          case 1:
            town = emoji(emo.th1);
            break;
          case 2:
            town = emoji(emo.th2);
            break;
          case 3:
            town = emoji(emo.th3);
            break;
          case 4:
            town = emoji(emo.th4);
            break;
          case 5:
            town = emoji(emo.th5);
            break;
          case 6:
            town = emoji(emo.th6);
            break;
          case 7:
            town = emoji(emo.th7);
            break;
          case 8:
            town = emoji(emo.th8);
            break;
          case 9:
            town = emoji(emo.th9);
            break;
          case 10:
            town = emoji(emo.th10);
            break;
          case 11:
            town = emoji(emo.th11);
            break;
          case 12:
            town = emoji(emo.th12);
            break;
          case 13:
            town = emoji(emo.th13);
            break;
          case 14:
            town = emoji(emo.th14);
            break;
          default:
            town = emoji(emo.th15);
            break;
        }

        embed.setTitle(town + " **" + response.name + "**");
        embed.setURL(
          "https://link.clashofclans.com/?action=OpenPlayerProfile&tag=%" +
            response.tag.replace("#", "23")
        );
        embed.setColor(config.colorPink);
        embed.setDescription(
          "**Troops :** " + emoji(emo.pink) + "\n>>> " + descriptiontroupeRose
        );

        embed.addFields(
          {
            name: "Troupe : " + emoji(emo.dark),
            value: ">>> " + descriptiontroupeNoire,
          },
          {
            name: "Spell : " + emoji(emo.pink),
            value: ">>> " + descriptionspellRose,
          },
          {
            name: "Spell : " + emoji(emo.dark),
            value: ">>> " + descriptionspellNoire,
          },
          {
            name: "Super Troupe",
            value: ">>> " + descriptiontroupeSuper,
          },
          {
            name: "War Machine",
            value: ">>> " + descriptionmachine,
          },
          {
            name: "Troops Builder Base:",
            value: ">>> " + descriptionmdo,
          },
          {
            name: "Hero :",
            value: ">>> " + descriptionshero,
          },
          {
            name: "Annimals",
            value: ">>> " + descriptionannimals,
          }
        );
        console.log(descriptionannimals);
        return interaction.reply({ embeds: [embed] });
      });
  },
};
