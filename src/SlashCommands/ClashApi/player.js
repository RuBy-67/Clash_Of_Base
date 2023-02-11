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
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335784796594316/DALLE_2023-02-09_00.08.20_-_complete_this_with_black_hair_in_wind_and_small_dead_head_in_their_hair_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785090199552/DALLE_2023-02-09_00.44.15_-_Skull_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785559957554/DALLE_2023-02-09_00.04.28_-_complete_this_image_with_red_hair_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335785929060433/DALLE_2023-02-09_00.06.14_-_complete_this_image_with_blue_hair_in_wind_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335786235252876/DALLE_2023-02-09_00.47.35_-_a_Robot_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335786545623112/DALLE_2023-02-09_00.47.50_-_a_Robot_.png",
        "https://cdn.discordapp.com/attachments/1069329186365394995/1073335787090890762/DALLE_2023-02-09_00.45.59_-_Cyborg_.png",
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
        var equity = response.donations - response.donationsReceived;

        if (response.league != undefined || response.league != null) {
          var ligue;
          switch (response.league.id) {
            case  29000022:
              ligue = emoji(emo.legend);
              break;
            case  29000001:
              ligue = emoji(emo.bronze1);
              break;
            case  29000002:
              ligue = emoji(emo.bronze2);
              break;
            case  29000003:
              ligue = emoji(emo.bronze3);
              break;
            case  29000004:
              ligue = emoji(emo.silver3);
              break;
            case  29000005:
              ligue = emoji(emo.silver2);
              break;
            case  29000006:
              ligue = emoji(emo.silver1);
              break;
            case  29000007:
              ligue = emoji(emo.gold3);
              break;
            case  29000008:
              ligue = emoji(emo.gold2);
              break;
            case  29000009:
              ligue = emoji(emo.gold1);
              break;
            case  29000010:
              ligue = emoji(emo.cristal3);
              break;
            case  29000011:
              ligue = emoji(emo.cristal2);
              break;
            case  29000012:
              ligue = emoji(emo.cristal1);
              break;
            case  29000013:
              ligue = emoji(emo.master3);
              break;
            case  29000014:
              ligue = emoji(emo.master2);
              break;
            case  29000015:
              ligue = emoji(emo.master1);
              break;
            case  29000016:
              ligue = emoji(emo.champ3);
              break;
            case  29000017:
              ligue = emoji(emo.champ2);
              break;
            case  29000018:
              ligue = emoji(emo.champ1);
              break;
            case  29000019:
              ligue = emoji(emo.titan3);
              break;
            case  29000020:
              ligue = emoji(emo.titan2);
              break;
            case  29000021:
              ligue = emoji(emo.titan3);
              break;
            default:
              ligue = emoji(emo.no_league);
          }
        } else ligue = emoji(emo.no_league);

        var town;
        switch (response.townHallLevel) {
          case  1:
            town = emoji(emo.th1) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  2:
            town = emoji(emo.th2) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  3:
            town = emoji(emo.th3) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  4:
            town = emoji(emo.th4) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  5:
            town = emoji(emo.th5) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  6:
            town = emoji(emo.th6) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  7:
            town = emoji(emo.th7) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  8:
            town = emoji(emo.th8) + " " + response.townHallLevel;
            e.setColor("#FFD500");
            break;
          case  9:
            town = emoji(emo.th9) + " " + response.townHallLevel;
            e.setColor("#000000");
            break;
          case  10:
            town = emoji(emo.th10) + " " + response.townHallLevel;
            e.setColor("#FF4C00");
            break;
          case  11:
            town = emoji(emo.th11) + " " + response.townHallLevel;
            e.setColor("#FFFFFF");
            break;
          case  12:
            town = emoji(emo.th12) + " " + response.townHallLevel;
            e.setColor("#0064FF");
            break;
          case  13:
            town = emoji(emo.th13) + " " + response.townHallLevel;
            e.setColor("#05F7E1");
            break;
          case  14:
            town = emoji(emo.th14) + " " + response.townHallLevel;
            e.setColor("#84F705");
            break;
          default:
            town = emoji(emo.th15) + " " + response.townHallLevel;
            e.setColor("#51B1FF");
            break;
        }
        var bhemo;
        switch (response.builderHallLevel) {
          case 1:
            bhemo = emoji(emo.mdo1) + " " + response.builderHallLevel;
            break;
          case 2:
            bhemo = emoji(emo.mdo2) + " " + response.builderHallLevel;
            break;
          case 3:
            bhemo = emoji(emo.mdo3) + " " + response.builderHallLevel;
            break;
          case 4:
            bhemo = emoji(emo.mdo4) + " " + response.builderHallLevel;
            break;
          case 5:
            bhemo = emoji(emo.mdo5) + " " + response.builderHallLevel;
            break;
          case 6:
            bhemo = emoji(emo.mdo6) + " " + response.builderHallLevel;
            break;
          case 7:
            bhemo = emoji(emo.mdo7) + " " + response.builderHallLevel;
            break;
          case 8:
            bhemo = emoji(emo.mdo8) + " " + response.builderHallLevel;
            break;
          case 9:
            bhemo = emoji(emo.mdo9) + " " + response.builderHallLevel;
            break;
          default:
            bhemo = "blocked";
        };

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
        } else {
          var emoLabel1;
          switch (response.labels[0].id) {
            case  57000009:
              emoLabel1 = emoji(emo.ActiveDaily);
              break;
            case  57000008:
              emoLabel1 = emoji(emo.ActiveDonator);
              break;
            case  57000017:
              emoLabel1 = emoji(emo.AmateurAttacker);
              break;
            case  57000010:
              emoLabel1 = emoji(emo.AngryLearner);
              break;
            case  57000006:
              emoLabel1 = emoji(emo.BaseDesigning);
              break;
            case  57000005:
              emoLabel1 = emoji(emo.BuilderBase);
              break;
            case  57000018:
              emoLabel1 = emoji(emo.ClanCapital);
              break;
            case  57000004:
              emoLabel1 = emoji(emo.ClanGames);
              break;
            case  57000000:
              emoLabel1 = emoji(emo.ClanWars);
              break;
            case  57000001:
              emoLabel1 = emoji(emo.ClanWarLeague);
              break;
            case  57000014:
              emoLabel1 = emoji(emo.Competitive);
              break;
            case  57000007:
              emoLabel1 = emoji(emo.Farming);
              break;
            case  57000003:
              emoLabel1 = emoji(emo.FriendlyWars);
              break;
            case  57000011:
              emoLabel1 = emoji(emo.Friendly);
              break;
            case  57000016:
              emoLabel1 = emoji(emo.Newbie);
              break;
            case  57000012:
              emoLabel1 = emoji(emo.Talkative);
              break;
            case  57000013:
              emoLabel1 = emoji(emo.Teacher);
              break;
            case  57000002:
              emoLabel1 = emoji(emo.TrophyPushing);
              break;
            case  57000015:
              emoLabel1 = emoji(emo.Veteran);
              break;
            default:
              emoLabel1 = ":black_medium_square:";
          }
          var emoLabel2;
          switch (response.labels[1].id) {
            case  57000009:
              emoLabel2 = emoji(emo.ActiveDaily);
              break;
            case  57000008:
              emoLabel2 = emoji(emo.ActiveDonator);
              break;
            case  57000017:
              emoLabel2 = emoji(emo.AmateurAttacker);
              break;
            case  57000010:
              emoLabel2 = emoji(emo.AngryLearner);
              break;
            case  57000006:
              emoLabel2 = emoji(emo.BaseDesigning);
              break;
            case  57000005:
              emoLabel2 = emoji(emo.BuilderBase);
              break;
            case  57000018:
              emoLabel2 = emoji(emo.ClanCapital);
              break;
            case  57000004:
              emoLabel2 = emoji(emo.ClanGames);
              break;
            case  57000000:
              emoLabel2 = emoji(emo.ClanWars);
              break;
            case  57000001:
              emoLabel2 = emoji(emo.ClanWarLeague);
              break;
            case  57000014:
              emoLabel2 = emoji(emo.Competitive);
              break;
            case  57000007:
              emoLabel2 = emoji(emo.Farming);
              break;
            case  57000003:
              emoLabel2 = emoji(emo.FriendlyWars);
              break;
            case  57000011:
              emoLabel2 = emoji(emo.Friendly);
              break;
            case  57000016:
              emoLabel2 = emoji(emo.Newbie);
              break;
            case  57000012:
              emoLabel2 = emoji(emo.Talkative);
              break;
            case  57000013:
              emoLabel2 = emoji(emo.Teacher);
              break;
            case  57000002:
              emoLabel2 = emoji(emo.TrophyPushing);
              break;
            case  57000015:
              emoLabel2 = emoji(emo.Veteran);
              break;
            default:
              emoLabel2 = ":black_medium_square:";
          }
          var emoLabel3;
          switch (response.labels[2].id) {
            case  57000009:
              emoLabel3 = emoji(emo.ActiveDaily);
              break;
            case  57000008:
              emoLabel3 = emoji(emo.ActiveDonator);
              break;
            case  57000017:
              emoLabel3 = emoji(emo.AmateurAttacker);
              break;
            case  57000010:
              emoLabel3 = emoji(emo.AngryLearner);
              break;
            case  57000006:
              emoLabel3 = emoji(emo.BaseDesigning);
              break;
            case  57000005:
              emoLabel3 = emoji(emo.BuilderBase);
              break;
            case  57000018:
              emoLabel3 = emoji(emo.ClanCapital);
              break;
            case  57000004:
              emoLabel3 = emoji(emo.ClanGames);
              break;
            case  57000000:
              emoLabel3 = emoji(emo.ClanWars);
              break;
            case  57000001:
              emoLabel3 = emoji(emo.ClanWarLeague);
              break;
            case  57000014:
              emoLabel3 = emoji(emo.Competitive);
              break;
            case  57000007:
              emoLabel3 = emoji(emo.Farming);
              break;
            case  57000003:
              emoLabel3 = emoji(emo.FriendlyWars);
              break;
            case  57000011:
              emoLabel3 = emoji(emo.Friendly);
              break;
            case  57000016:
              emoLabel3 = emoji(emo.Newbie);
              break;
            case  57000012:
              emoLabel3 = emoji(emo.Talkative);
              break;
            case  57000013:
              emoLabel3 = emoji(emo.Teacher);
              break;
            case  57000002:
              emoLabel3 = emoji(emo.TrophyPushing);
              break;
            case  57000015:
              emoLabel3 = emoji(emo.Veteran);
              break;
            default:
              emoLabel3 = ":black_medium_square:";
          }
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
        e.setURL(
          "https://link.clashofclans.com/?action=OpenPlayerProfile&tag=%" +
            response.tag.replace("#", "23")
        );
        e.setThumbnail(`${randomLink()}`);
        e.setDescription("Tag : `" + response.tag + "`");
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
            value: bhemo,
            inline: true,
          },
          {
            name: "Levels :",
            value: emoji(emo.xp) + " " + response.expLevel,
            inline: true,
          },
          {
            name: "Successful Attacks :",
            value: emoji(emo.epee) + " " + response.attackWins,
            inline: true,
          },
          {
            name: "War stars :",
            value: emoji(emo.star) + " " + response.warStars + " ",
            inline: true,
          },
          {
            name: "Clan :",
            value: clan + "\nRole : **" + response.role + "**",
            inline: false,
          },
          {
            name: "Donation :",
            value:
              emoji(emo.greenup) +
              response.donations +
              "\n" +
              emoji(emo.reddown) +
              response.donationsReceived +
              "\n" +
              `Ratio: **${equity}**` +
              " " +
              `\nTotal: **${response.achievements[14].value}**`,
            inline: false,
          },
          {
            name: "Th Trophy :" + ligue,
            value:
              emoji(emo.thtrophy) +
              " " +
              response.trophies +
              "\n" +
              emoji(emo.thtrophy) +
              " " +
              response.bestTrophies,
            inline: true,
          },
          {
            name: "Bh Trophy  :",
            value:
              emoji(emo.bhtrophy) +
              " " +
              response.versusTrophies +
              "\n" +
              emoji(emo.bhtrophy) +
              " " +
              response.bestVersusTrophies,
            inline: true,
          },
          {
            name: "Hero :",
            value:
              emoji(emo.king) +
              " **" +
              king +
              " " +
              emoji(emo.queen) +
              " " +
              queen +
              " " +
              emoji(emo.warden) +
              " " +
              gardien +
              " " +
              emoji(emo.champ) +
              " " +
              championne +
              "**\n" +
              emoji(emo.mdc) +
              " **" +
              mdc +
              "**",
            inline: false,
          },
          {
            name: "Labels :",
            value: emoLabel1 + " " + emoLabel2 + " " + emoLabel3,
            inline: false,
          },
          {
            name: "Clan capitals contributions",
            value:
              emoji(emo.jewels) + " " + response.clanCapitalContributions + " ",
            inline: false,
          }
        );

        return interaction.reply({ embeds: [e] });
      });
  },
};
