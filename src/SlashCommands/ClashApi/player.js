const emo = require("../../jsons/emoji.json");
const config = require(`../../jsons/config.json`);
const Discord = require("discord.js");
const CoC = require("clash-of-clans-api");
const api_client = new CoC({
  token: config.ClashApi,
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
    function randomLink() {
      //Thumbail aléatoire la première (pdp originale) a 65% de chance de sortir les autres on  35% / le nombre d'image)
      const links = [
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073020978935906404/RuBy_an_archer_inspired_by_the_clash_of_clans_universe_with_pin_8e5d04fe-e1bb-401b-bb73-31f5754356b7.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073020978596159538/DALLE_2023-02-09_00.08.20_-_complete_this_with_black_hair_in_wind_and_small_dead_head_in_their_hair_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073020979212718080/DALLE_2023-02-09_00.04.28_-_complete_this_image_with_red_hair_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073020979560857630/DALLE_2023-02-09_00.06.14_-_complete_this_image_with_blue_hair_in_wind_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073028843260088340/DALLE_2023-02-09_00.44.15_-_Skull_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073028843503374416/DALLE_2023-02-09_00.45.59_-_Cyborg_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073028843763412992/DALLE_2023-02-09_00.47.35_-_a_Robot_.png",
        "https://cdn.discordapp.com/attachments/1071177069985284292/1073028844124131409/DALLE_2023-02-09_00.47.50_-_a_Robot_.png",
      ];

      const randomNumber = Math.random() * 100;
      if (randomNumber <= 65) {
        return links[0];
      } else {
        const index = Math.floor(
          ((randomNumber - 65) / (100 - 65)) * (links.length - 1) + 1
        );
        return links[index];
      }
    }

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
        if (response.league != undefined || response.league != null) {
          var ligue;
          if (response.league.name == "Legend League") {
            ligue = emoji(emo.legend) + "|" + response.league.name;
          } else if (response.league.name == "Bronze League") {
            ligue = emoji(emo.bronze) + "|" + response.league.name;
          } else if (response.league.name == "Silver League") {
            ligue = emoji(emo.silver) + "|" + response.league.name;
          } else if (response.league.name == "Gold League") {
            ligue = emoji(emo.gold) + "|" + response.league.name;
          } else if (response.league.name == "Crystal League") {
            ligue = emoji(emo.cristal) + "|" + response.league.name;
          } else if (response.league.name == "Master League") {
            ligue = emoji(emo.master) + "|" + response.league.name;
          } else if (response.league.name == "Champion League") {
            ligue = emoji(emo.champion) + "|" + response.league.name;
          } else if (response.league.name == "Titan League") {
            ligue = emoji(emo.titan) + "|" + response.league.name;
          }
        } else ligue = emoji(emo.no_league) + "Not Classed";
        var town;
        if (response.townHallLevel == "1") {
          town = emoji(emo.th1) + response.townHallLevel;
          e.setColor("#FFD500");
        } else if (response.townHallLevel == "2") {
          town = emoji(emo.th2) + response.townHallLevel;
          e.setColor("#FFD500");
        } else if (response.townHallLevel == "3") {
          e.setColor("#FFD500");
          town = emoji(emo.th3) + response.townHallLevel;
        } else if (response.townHallLevel == "4") {
          e.setColor("#FFD500");
          town = emoji(emo.th4) + response.townHallLevel;
        } else if (response.townHallLevel == "5") {
          e.setColor("#FFD500");
          town = emoji(emo.th5) + response.townHallLevel;
        } else if (response.townHallLevel == "6") {
          e.setColor("#FFD500");
          town = emoji(emo.th6) + response.townHallLevel;
        } else if (response.townHallLevel == "7") {
          e.setColor("#FFD500");
          town = emoji(emo.th7) + response.townHallLevel;
        } else if (response.townHallLevel == "8") {
          e.setColor("#FFD500");
          town = emoji(emo.th8) + response.townHallLevel;
        } else if (response.townHallLevel == "9") {
          e.setColor("#000000");
          town = emoji(emo.th9) + response.townHallLevel;
        } else if (response.townHallLevel == "10") {
          e.setColor("#FF4C00");
          town = emoji(emo.th10) + response.townHallLevel;
        } else if (response.townHallLevel == "11") {
          e.setColor("#FFFFFF");
          town = emoji(emo.th11) + response.townHallLevel;
        } else if (response.townHallLevel == "12") {
          e.setColor("#0064FF");
          town = emoji(emo.th12) + response.townHallLevel;
        } else if (response.townHallLevel == "13") {
          e.setColor("#05F7E1");
          town = emoji(emo.th13) + response.townHallLevel;
        } else if (response.townHallLevel == "14") {
          e.setColor("#84F705");
          town = emoji(emo.th14) + response.townHallLevel;
        } else {
          town = emoji(emo.th15) + response.townHallLevel;
          e.setColor("#51B1FF");
        }

        if (
          response.builderHallLevel != undefined ||
          response.builderHallLevel != null
        )
          var bh = response.builderHallLevel;
        else bh = "blocked";
        if (response.clan != undefined || response.clan != null)
          var clan =
            " **[" +
            response.clan.name +
            "](https://link.clashofclans.com/fr?action=OpenClanProfile&tag" +
            response.clan.tag.replace("#", "=") +
            ")** ( Tag: `" +
            response.clan.tag +
            "` )";
        else clan = "No Clan";
        if (
          response.labels === undefined ||
          response.labels === null ||
          response.labels[0] === undefined ||
          response.labels[0] === null ||
          response.labels.length === "0"
        ) {
          var labels = "Not Defined";
        } else {
          labels =
            response.labels[0].name +
            " **|** " +
            response.labels[1].name +
            " **|** " +
            response.labels[2].name;
        }
        if (response.heroes[0] != undefined || response.heroes[0] != null) {
          if (response.heroes[0].village === "home") {
            var king = response.heroes[0].level;
            var mdc = "0";
          } else {
            king = "0";
            mdc = response.heroes[0].level;
          }

          if (response.heroes[1] != undefined || response.heroes[1] != null) {
            if (response.heroes[1].village === "home") {
              var queen = response.heroes[1].level;
              var mdc = "0";
            } else {
              queen = "0";
              mdc = response.heroes[1].level;
            }

            if (response.heroes[2] != undefined || response.heroes[2] != null) {
              if (response.heroes[2].village === "home") {
                var gardien = response.heroes[2].level;
                var mdc = "0";
              } else {
                gardien = "0";
                mdc = response.heroes[2].level;
              }

              if (
                response.heroes[3] != undefined ||
                response.heroes[3] != null
              ) {
                if (response.heroes[3].village === "home") {
                  var championne = response.heroes[3].level;
                  var mdc = "0";
                } else {
                  championne = "0";
                  mdc = response.heroes[3].level;
                }

                if (
                  response.heroes[4] != undefined ||
                  response.heroes[4] != null
                ) {
                  if (response.heroes[4].village === "builderbase") {
                    var mdc = response.heroes[4].level;
                  } else {
                    var championne = response.heroes[4].level;
                  }
                }
              } else {
                championne = "0";
              }
            } else {
              championne = "0";
              gardien = "0";
            }
          } else {
            championne = "0";
            gardien = "0";
            queen = "0";
          }
        } else {
          mdc = "0";
          championne = "0";
          gardien = "0";
          queen = "0";
          king = "0";
        }

        e.setTitle("**" + response.name + "**");
        e.setThumbnail(`${randomLink()}`);
        e.setDescription(
          "**[Player Profile](https://link.clashofclans.com/?action=OpenPlayerProfile&tag=%" +
            response.tag.replace("#", "23") +
            ")  |  Tag : `" +
            response.tag +
            "`**"
        );
        e.setFooter({
          text: "Clash of Base - Developped by " + config.dev,
          iconURL: client.user.displayAvatarURL(),
        });
        e.addFields(
          {
            name: "Town Hall :",
            value: town,
            inline: true,
          },
          {
            name: "Builder Hall :",
            value: bh + " ",
            inline: true,
          },
          {
            name: "Levels :",
            value: response.expLevel + " ",
            inline: true,
          },
          {
            name: "War stars :",
            value: response.warStars + " ",
            inline: true,
          },
          {
            name: "Donation :",
            value: response.donations + " ",
            inline: true,
          },
          {
            name: "Successful Attacks :",
            value: response.attackWins + " ",
            inline: true,
          },
          {
            name: "Clan :",
            value: clan + " ",
            inline: true,
          },
          {
            name: "Th Trophy :",
            value: response.trophies + "\n" + response.bestTrophies,
            inline: true,
          },
          {
            name: "Bh Trophy  :",
            value: response.versusTrophies + " ",
            inline: true,
          },
          {
            name: "League :",
            value: ligue,
            inline: true,
          },
          {
            name: "Hero :",
            value:
              king +
              "\n" +
              queen +
              "\n" +
              gardien +
              "\n" +
              championne +
              "\n" +
              mdc,
            inline: true,
          },
          {
            name: "Labels :",
            value: labels + " ",
            inline: true,
          },
          {
            name: "Clan Capitals contributions",
            value: response.clanCapitalContributions + " ",
            inline: true,
          }
        );

        return interaction.reply({ embeds: [e] });
      });
  },
};
