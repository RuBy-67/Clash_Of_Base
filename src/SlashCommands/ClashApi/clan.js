const emo = require("../../jsons/emoji.json");
const config = require(`../../jsons/config.json`);
const Discord = require("discord.js");
const CoC = require("clash-of-clans-api");
const api_client = new CoC({
  token: config.ClashApi,
});
module.exports = {
  name: "clan",
  description: "Take Information on a Player",
  options: [
    {
      name: "tag",
      description: "clan Tag",
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
      if (randomNumber <= 75) {
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
      .clanByTag(tag)
      .catch((err) => {
        interaction.reply({ embeds: [error] });
      })
      .then((response) => {
        let ctype = response.type;
        if (ctype === "inviteOnly") var ctype2 = "InviteOnly";
        else if (ctype === "open") var ctype2 = "Open";
        else if (ctype === "close") var ctype2 = "Close";
        else ctype2 = ctype;

        let fdg = response.warFrequency;
        if (fdg === "always") var fdg2 = "Always";
        else if (fdg === "never") var fdg2 = "Nevers";
        else if (fdg === "unknown") var fdg2 = "Unknown";
        else fdg2 = fdg;
        if (response.warLeague != undefined || response.warLeague != null) {
          var ligue;
          switch (response.warLeague.id) {
            case 48000022:
              ligue = emoji(emo.legend);
              break;
            case 48000001:
              ligue = emoji(emo.Clashofclans_Bronze_III);
              break;
            case 48000002:
              ligue = emoji(emo.Clashofclans_Bronze_II);
              break;
            case 48000003:
              ligue = emoji(emo.Clashofclans_Bronze_I);
              break;
            case 48000004:
              ligue = emoji(emo.Clashofclans_Argent_III);
              break;
            case 48000005:
              ligue = emoji(emo.Clashofclans_Argent_II);
              break;
            case 48000006:
              ligue = emoji(emo.Clashofclans_Argent_I);
              break;
            case 48000007:
              ligue = emoji(emo.Clashofclans_Or_III);
              break;
            case 48000008:
              ligue = emoji(emo.Clashofclans_Or_II);
              break;
            case 48000009:
              ligue = emoji(emo.Clashofclans_Or_I);
              break;
            case 48000010:
              ligue = emoji(emo.Clashofclans_Cristal_III);
              break;
            case 48000011:
              ligue = emoji(emo.Clashofclans_Or_II);
              break;
            case 48000012:
              ligue = emoji(emo.Clashofclans_Cristal_I);
              break;
            case 48000013:
              ligue = emoji(emo.Clashofclans_Master_III);
              break;
            case 48000014:
              ligue = emoji(emo.Clashofclans_Master_II);
              break;
            case 48000015:
              ligue = emoji(emo.Clashofclans_Master_I);
              break;
            case 48000016:
              ligue = emoji(emo.Clashofclans_Champion_III);
              break;
            case 48000017:
              ligue = emoji(emo.Clashofclans_Champion_II);
              break;
            case 48000018:
              ligue = emoji(emo.Clashofclans_Champion_I);
              break;
            case 48000019:
              ligue = emoji(emo.titan3);
              break;
            case 48000020:
              ligue = emoji(emo.titan2);
              break;
            case 48000021:
              ligue = emoji(emo.titan3);
              break;
            default:
              ligue = emoji(emo.no_league);
          }
        } else ligue = emoji(emo.no_league);

        if (
          response.capitalLeague != undefined ||
          response.capitalLeague != null
        ) {
          var capligue;
          switch (response.capitalLeague.id) {
            case 85000022:
              capligue = emoji(emo.legend);
              break;
            case 85000001:
              capligue = emoji(emo.bronze1);
              break;
            case 85000002:
              capligue = emoji(emo.bronze2);
              break;
            case 85000003:
              capligue = emoji(emo.bronze3);
              break;
            case 85000004:
              capligue = emoji(emo.silver3);
              break;
            case 85000005:
              capligue = emoji(emo.silver2);
              break;
            case 85000006:
              capligue = emoji(emo.silver1);
              break;
            case 85000007:
              capligue = emoji(emo.gold3);
              break;
            case 85000008:
              capligue = emoji(emo.gold2);
              break;
            case 85000009:
              capligue = emoji(emo.gold1);
              break;
            case 85000010:
              capligue = emoji(emo.cristal3);
              break;
            case 85000011:
              capligue = emoji(emo.cristal2);
              break;
            case 85000012:
              capligue = emoji(emo.cristal1);
              break;
            case 85000013:
              capligue = emoji(emo.master3);
              break;
            case 85000014:
              capligue = emoji(emo.master2);
              break;
            case 85000015:
              capligue = emoji(emo.master1);
              break;
            case 85000016:
              capligue = emoji(emo.champ3);
              break;
            case 85000017:
              capligue = emoji(emo.champ2);
              break;
            case 85000018:
              capligue = emoji(emo.champ1);
              break;
            case 85000019:
              capligue = emoji(emo.titan3);
              break;
            case 85000020:
              capligue = emoji(emo.titan2);
              break;
            case 85000021:
              capligue = emoji(emo.titan3);
              break;
            default:
              capligue = emoji(emo.no_league);
              break;
          }
        }

        switch (response.requiredTownhallLevel) {
          case "1":
            town = emoji(emo.th1);
            break;
          case "2":
            town = emoji(emo.th2);
            break;
          case "3":
            town = emoji(emo.th3);
            break;
          case "4":
            town = emoji(emo.th4);
            break;
          case "5":
            town = emoji(emo.th5);
            break;
          case "6":
            town = emoji(emo.th6);
            break;
          case "7":
            town = emoji(emo.th7);
            break;
          case "8":
            town = emoji(emo.th8);
            break;
          case "9":
            town = emoji(emo.th9);
            break;
          case "10":
            town = emoji(emo.th10);
            break;
          case "11":
            town = emoji(emo.th11);
            break;
          case "12":
            town = emoji(emo.th12);
            break;
          case "13":
            town = emoji(emo.th13);
            break;
          case "14":
            town = emoji(emo.th14);
            break;
          default:
            town = emoji(emo.th15);
        }
        if (
          response.description === undefined ||
          response.description === null ||
          response.description === " " ||
          response.description.length === 0
        ) {
          var desc = "Pas de Description";
        } else {
          desc = response.description;
        }
        if (response.location === undefined || response.location === null) {
          var loca = "Origin Not Defined";
        } else {
          loca = response.location.name;
        }
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
            case 56000009:
              emoLabel1 = emoji(emo.ActiveDonator);
              break;
            case 56000006:
              emoLabel1 = emoji(emo.BaseDesigning);
              break;
            case 56000005:
              emoLabel1 = emoji(emo.BuilderBase);
              break;
            case 56000016:
              emoLabel1 = emoji(emo.ClanCapital);
              break;
            case 56000004:
              emoLabel1 = emoji(emo.ClanGames);
              break;
            case 56000000:
              emoLabel1 = emoji(emo.ClanWars);
              break;
            case 56000001:
              emoLabel1 = emoji(emo.ClanWarLeague);
              break;
            case 56000014:
              emoLabel1 = emoji(emo.Competitive);
              break;
            case 56000008:
              emoLabel1 = emoji(emo.Farming);
              break;
            case 56000003:
              emoLabel1 = emoji(emo.FriendlyWars);
              break;
            case 56000010:
              emoLabel1 = emoji(emo.Friendly);
              break;
            case 56000015:
              emoLabel1 = emoji(emo.Newbie);
              break;
            case 56000011:
              emoLabel1 = emoji(emo.Talkative);
              break;
            case 56000002:
              emoLabel1 = emoji(emo.TrophyPushing);
              break;
            case 56000007:
              emoLabel1 = emoji(emo.International);
              break;
            case 56000012:
              emoLabel1 = emoji(emo.Underdog);
              break;
            case 56000013:
              emoLabel1 = emoji(emo.Relaxed);
              break;
            default:
              emoLabel1 = ":black_medium_square:";
          }
          var emoLabel2;
          switch (response.labels[1].id) {
            case 56000009:
              emoLabel2 = emoji(emo.ActiveDonator);
              break;
            case 56000006:
              emoLabel2 = emoji(emo.BaseDesigning);
              break;
            case 56000005:
              emoLabel2 = emoji(emo.BuilderBase);
              break;
            case 56000016:
              emoLabel2 = emoji(emo.ClanCapital);
              break;
            case 56000004:
              emoLabel2 = emoji(emo.ClanGames);
              break;
            case 56000000:
              emoLabel2 = emoji(emo.ClanWars);
              break;
            case 56000001:
              emoLabel2 = emoji(emo.ClanWarLeague);
              break;
            case 56000014:
              emoLabel2 = emoji(emo.Competitive);
              break;
            case 56000008:
              emoLabel2 = emoji(emo.Farming);
              break;
            case 56000003:
              emoLabel2 = emoji(emo.FriendlyWars);
              break;
            case 56000010:
              emoLabel2 = emoji(emo.Friendly);
              break;
            case 56000015:
              emoLabel2 = emoji(emo.Newbie);
              break;
            case 56000011:
              emoLabel2 = emoji(emo.Talkative);
              break;
            case 56000002:
              emoLabel2 = emoji(emo.TrophyPushing);
              break;
            case 56000007:
              emoLabel2 = emoji(emo.International);
              break;
            case 56000012:
              emoLabel2 = emoji(emo.Underdog);
              break;
            case 56000013:
              emoLabel2 = emoji(emo.Relaxed);
              break;
            default:
              emoLabel2 = ":black_medium_square:";
          }
          var emoLabel3;
          switch (response.labels[2].id) {
            case 56000009:
              emoLabel3 = emoji(emo.ActiveDonator);
              break;
            case 56000006:
              emoLabel3 = emoji(emo.BaseDesigning);
              break;
            case 56000005:
              emoLabel3 = emoji(emo.BuilderBase);
              break;
            case 56000016:
              emoLabel3 = emoji(emo.ClanCapital);
              break;
            case 56000004:
              emoLabel3 = emoji(emo.ClanGames);
              break;
            case 56000000:
              emoLabel3 = emoji(emo.ClanWars);
              break;
            case 56000001:
              emoLabel3 = emoji(emo.ClanWarLeague);
              break;
            case 56000014:
              emoLabel3 = emoji(emo.Competitive);
              break;
            case 56000008:
              emoLabel3 = emoji(emo.Farming);
              break;
            case 56000003:
              emoLabel3 = emoji(emo.FriendlyWars);
              break;
            case 56000010:
              emoLabel3 = emoji(emo.Friendly);
              break;
            case 56000015:
              emoLabel3 = emoji(emo.Newbie);
              break;
            case 56000011:
              emoLabel3 = emoji(emo.Talkative);
              break;
            case 56000002:
              emoLabel3 = emoji(emo.TrophyPushing);
              break;
            case 56000007:
              emoLabel3 = emoji(emo.International);
              break;
            case 56000012:
              emoLabel3 = emoji(emo.Underdog);
              break;
            case 56000013:
              emoLabel3 = emoji(emo.Relaxed);
              break;
            default:
              emoLabel3 = ":black_medium_square:";
          }
        }

        let embed = new Discord.MessageEmbed();
        embed.setTitle("**" + response.name + "**");
        embed.setURL(
          "https://link.clashofclans.com/fr?action=OpenClanProfile&tag" +
            response.tag.replace("#", "=")
        );
        embed.setThumbnail(`${randomLink()}`);
        embed.setColor(config.colorPink);
        embed.setFooter({
          text: "Clash of Base - Developped by " + config.dev,
          iconURL: client.user.displayAvatarURL(),
        });
        embed.setDescription(
          "Clan Levels : **" +
            response.clanLevel +
            "**\n`" +
            ctype2 +
            "` `" +
            response.tag +
            "`\n\n" +
            desc
        );
        embed.addFields(
          {
            name: "Country :",
            value: emoji(emo.earth) + " " + loca,
            inline: true,
          },
          {
            name: "Members :",
            value: emoji(emo.barbar) + " " + response.members + "/50",
            inline: true,
          },
          {
            name: "Clan Points",
            value:
              emoji(emo.thtrophy) +
              " " +
              response.clanPoints +
              "\n" +
              emoji(emo.bhtrophy) +
              " " +
              response.clanVersusPoints +
              "\n" +
              emoji(emo.cc) +
              " " +
              response.clanCapitalPoints,
            inline: false,
          },
          {
            name: "Required :",
            value:
              town +
              " " +
              emoji(emo.thtrophy) +
              " **" +
              response.requiredTrophies +
              "\n" +
              emoji(emo.bhtrophy) +
              " " +
              response.requiredVersusTrophies +
              "**",
            inline: true,
          },
          {
            name: "Labels",
            value: emoLabel1 + " " + emoLabel2 + " " + emoLabel3,
            inline: false,
          },
          {
            name: "War Stats",
            value:
              "Victory : " +
              response.warWins +
              "\nStreak : " +
              response.warWinStreak,
            inline: true,
          },
          {
            name: "War Frequency :",
            value: emoji(emo.epee) + " " + fdg2,
            inline: true,
          },
          {
            name: "League :",
            value: "CWL :" + ligue + "\nClanCapitals :" + capligue,
            inline: false,
          }
        );
        return interaction.reply({ embeds: [embed] });
      });
  },
};
