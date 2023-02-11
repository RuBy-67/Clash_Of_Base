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
          if (response.warLeague.id == "48000022") {
            ligue = emoji(emo.legend);
          } else if (response.warLeague.id == "48000001") {
            ligue = emoji(emo.Clashofclans_Bronze_III);
          } else if (response.warLeague.id == "48000002") {
            ligue = emoji(emo.Clashofclans_Bronze_II);
          } else if (response.warLeague.id == "48000003") {
            ligue = emoji(emo.Clashofclans_Bronze_I);
          } else if (response.warLeague.id == "48000004") {
            ligue = emoji(emo.Clashofclans_Argent_III);
          } else if (response.warLeague.id == "48000005") {
            ligue = emoji(emo.Clashofclans_Argent_II);
          } else if (response.warLeague.id == "48000006") {
            ligue = emoji(emo.Clashofclans_Argent_I);
          } else if (response.warLeague.id == "48000007") {
            ligue = emoji(emo.Clashofclans_Or_III);
          } else if (response.warLeague.id == "48000008") {
            ligue = emoji(emo.Clashofclans_Or_II);
          } else if (response.warLeague.id == "48000009") {
            ligue = emoji(emo.Clashofclans_Or_I);
          } else if (response.warLeague.id == "48000010") {
            ligue = emoji(emo.Clashofclans_Cristal_III);
          } else if (response.warLeague.id == "48000011") {
            ligue = emoji(emo.Clashofclans_Or_II);
          } else if (response.warLeague.id == "48000012") {
            ligue = emoji(emo.Clashofclans_Cristal_I);
          } else if (response.warLeague.id == "48000013") {
            ligue = emoji(emo.Clashofclans_Master_III);
          } else if (response.warLeague.id == "48000014") {
            ligue = emoji(emo.Clashofclans_Master_II);
          } else if (response.warLeague.id == "48000015") {
            ligue = emoji(emo.Clashofclans_Master_I);
          } else if (response.warLeague.id == "48000016") {
            ligue = emoji(emo.Clashofclans_Champion_III);
          } else if (response.warLeague.id == "48000017") {
            ligue = emoji(emo.Clashofclans_Champion_II);
          } else if (response.warLeague.id == "48000018") {
            ligue = emoji(emo.Clashofclans_Champion_I);
          } else if (response.warLeague.id == "48000019") {
            ligue = emoji(emo.titan3);
          } else if (response.warLeague.id == "48000020") {
            ligue = emoji(emo.titan2);
          } else if (response.warLeague.id == "48000021") {
            ligue = emoji(emo.titan3);
          } else ligue = emoji(emo.no_league);
        } else ligue = emoji(emo.no_league);

        if (
          response.capitalLeague != undefined ||
          response.capitalLeague != null
        ) {
          var capligue;
          if (response.capitalLeague.id == "85000022") {
            capligue = emoji(emo.legend);
          } else if (response.capitalLeague.id == "85000001") {
            capligue = emoji(emo.bronze1);
          } else if (response.capitalLeague.id == "85000002") {
            capligue = emoji(emo.bronze2);
          } else if (response.capitalLeague.id == "85000003") {
            capligue = emoji(emo.bronze3);
          } else if (response.capitalLeague.id == "85000004") {
            capligue = emoji(emo.silver3);
          } else if (response.capitalLeague.id == "85000005") {
            capligue = emoji(emo.silver2);
          } else if (response.capitalLeague.id == "85000006") {
            capligue = emoji(emo.silver1);
          } else if (response.capitalLeague.id == "85000007") {
            capligue = emoji(emo.gold3);
          } else if (response.capitalLeague.id == "85000008") {
            capligue = emoji(emo.gold2);
          } else if (response.capitalLeague.id == "85000009") {
            capligue = emoji(emo.gold1);
          } else if (response.capitalLeague.id == "85000010") {
            capligue = emoji(emo.cristal3);
          } else if (response.capitalLeague.id == "85000011") {
            capligue = emoji(emo.cristal2);
          } else if (response.capitalLeague.id == "85000012") {
            capligue = emoji(emo.cristal1);
          } else if (response.capitalLeague.id == "85000013") {
            capligue = emoji(emo.master3);
          } else if (response.capitalLeague.id == "85000014") {
            capligue = emoji(emo.master2);
          } else if (response.capitalLeague.id == "85000015") {
            capligue = emoji(emo.master1);
          } else if (response.capitalLeague.id == "85000016") {
            capligue = emoji(emo.champ3);
          } else if (response.capitalLeague.id == "85000017") {
            capligue = emoji(emo.champ2);
          } else if (response.capitalLeague.id == "85000018") {
            capligue = emoji(emo.champ1);
          } else if (response.capitalLeague.id == "85000019") {
            capligue = emoji(emo.titan3);
          } else if (response.capitalLeague.id == "85000020") {
            capligue = emoji(emo.titan2);
          } else if (response.capitalLeague.id == "85000021") {
            capligue = emoji(emo.titan3);
          } else capligue = emoji(emo.no_league);
        } else capligue = emoji(emo.no_league);

        if (
          response.labels === undefined ||
          response.labels === null ||
          response.labels[0] === undefined ||
          response.labels[0] === null ||
          response.labels.length === "0"
        ) {
          var labels = "Non Définis";
        } else {
          labels =
            response.labels[0].name +
            " **|** " +
            response.labels[1].name +
            " **|** " +
            response.labels[2].name;
        }
        if (response.requiredTownhallLevel == "1") {
          town = emoji(emo.th1);
        } else if (response.requiredTownhallLevel == "2") {
          town = emoji(emo.th2);
        } else if (response.requiredTownhallLevel == "3") {
          town = emoji(emo.th3);
        } else if (response.requiredTownhallLevel == "4") {
          town = emoji(emo.th4);
        } else if (response.requiredTownhallLevel == "5") {
          town = emoji(emo.th5);
        } else if (response.requiredTownhallLevel == "6") {
          town = emoji(emo.th6);
        } else if (response.requiredTownhallLevel == "7") {
          town = emoji(emo.th7);
        } else if (response.requiredTownhallLevel == "8") {
          town = emoji(emo.th8);
        } else if (response.requiredTownhallLevel == "9") {
          town = emoji(emo.th9);
        } else if (response.requiredTownhallLevel == "10") {
          town = emoji(emo.th10);
        } else if (response.requiredTownhallLevel == "11") {
          town = emoji(emo.th11);
        } else if (response.requiredTownhallLevel == "12") {
          town = emoji(emo.th12);
        } else if (response.requiredTownhallLevel == "13") {
          town = emoji(emo.th13);
        } else if (response.requiredTownhallLevel == "14") {
          town = emoji(emo.th14);
        } else {
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
          if (response.labels[0].name == "Active Daily") {
            emoLabel1 = emoji(emo.ActiveDaily);
          } else if (response.labels[0].name == "Active Donator") {
            emoLabel1 = emoji(emo.ActiveDonator);
          } else if (response.labels[0].name == "Amateur Attacker") {
            emoLabel1 = emoji(emo.AmateurAttacker);
          } else if (response.labels[0].name == "Hungry Learner") {
            emoLabel1 = emoji(emo.AngryLearner);
          } else if (response.labels[0].name == "Base Designing") {
            emoLabel1 = emoji(emo.BaseDesigning);
          } else if (response.labels[0].name == "Builder Base") {
            emoLabel1 = emoji(emo.BuilderBase);
          } else if (response.labels[0].name == "Clan Capital") {
            emoLabel1 = emoji(emo.ClanCapital);
          } else if (response.labels[0].name == "Clan Games") {
            emoLabel1 = emoji(emo.ClanGames);
          } else if (response.labels[0].name == "Clan Wars") {
            emoLabel1 = emoji(emo.ClanWars);
          } else if (response.labels[0].name == "Clan War League") {
            emoLabel1 = emoji(emo.ClanwarLeague);
          } else if (response.labels[0].name == "Competitive") {
            emoLabel1 = emoji(emo.Competitive);
          } else if (response.labels[0].name == "Farming") {
            emoLabel1 = emoji(emo.Farming);
          } else if (response.labels[0].name == "Friendly Wars") {
            emoLabel1 = emoji(emo.FriendlyWars);
          } else if (response.labels[0].name == "Friendly") {
            emoLabel1 = emoji(emo.Friendly);
          } else if (response.labels[0].name == "Newbie Friendly") {
            emoLabel1 = emoji(emo.Newbie);
          } else if (response.labels[0].name == "Talkative") {
            emoLabel1 = emoji(emo.Talkative);
          } else if (response.labels[0].name == "Teacher") {
            emoLabel1 = emoji(emo.Teacher);
          } else if (response.labels[0].name == "Trophy Pushing") {
            emoLabel1 = emoji(emo.TrophyPushing);
          } else if (response.labels[0].name == "Veteran") {
            emoLabel1 = emoji(emo.Veteran);
          } else if (response.labels[0].name == "International") {
            emoLabel1 = emoji(emo.International);
          } else if (response.labels[0].name == "Underdog") {
            emoLabel1 = emoji(emo.Underdog);
          } else if (response.labels[0].name == "Relaxed") {
            emoLabel1 = emoji(emo.Relaxed);
          } else {
            emoLabel1 = ":black_medium_square:";
          }
          var emoLabel2;
          if (response.labels[1].name == "Active Daily") {
            emoLabel2 = emoji(emo.ActiveDaily);
          } else if (response.labels[1].name == "Active Donator") {
            emoLabel2 = emoji(emo.ActiveDonator);
          } else if (response.labels[1].name == "Amateur Attacker") {
            emoLabel2 = emoji(emo.AmateurAttacker);
          } else if (response.labels[1].name == "Hungry Learner") {
            emoLabel2 = emoji(emo.AngryLearner);
          } else if (response.labels[1].name == "Base Designing") {
            emoLabel2 = emoji(emo.BaseDesigning);
          } else if (response.labels[1].name == "Builder Base") {
            emoLabel2 = emoji(emo.BuilderBase);
          } else if (response.labels[1].name == "Clan Capital") {
            emoLabel2 = emoji(emo.ClanCapital);
          } else if (response.labels[1].name == "Clan Games") {
            emoLabel2 = emoji(emo.ClanGames);
          } else if (response.labels[1].name == "Clan Wars") {
            emoLabel2 = emoji(emo.ClanWars);
          } else if (response.labels[1].name == "Clan War League") {
            emoLabel2 = emoji(emo.ClanWarLeague);
          } else if (response.labels[1].name == "Competitive") {
            emoLabel2 = emoji(emo.Competitive);
          } else if (response.labels[1].name == "Farming") {
            emoLabel2 = emoji(emo.Farming);
          } else if (response.labels[1].name == "Friendly Wars") {
            emoLabel2 = emoji(emo.FriendlyWars);
          } else if (response.labels[1].name == "Friendly") {
            emoLabel2 = emoji(emo.Friendly);
          } else if (response.labels[1].name == "Newbie Friendly") {
            emoLabel2 = emoji(emo.Newbie);
          } else if (response.labels[1].name == "Talkative") {
            emoLabel2 = emoji(emo.Talkative);
          } else if (response.labels[1].name == "Teacher") {
            emoLabel2 = emoji(emo.Teacher);
          } else if (response.labels[1].name == "Trophy Pushing") {
            emoLabel2 = emoji(emo.TrophyPushing);
          } else if (response.labels[1].name == "Veteran") {
            emoLabel2 = emoji(emo.Veteran);
          } else if (response.labels[1].name == "International") {
            emoLabel2 = emoji(emo.International);
          } else if (response.labels[1].name == "Underdog") {
            emoLabel2 = emoji(emo.Underdog);
          } else if (response.labels[1].name == "Relaxed") {
            emoLabel2 = emoji(emo.Relaxed);
          } else {
            emoLabel2 = ":black_medium_square:";
          }
          var emoLabel3;
          if (response.labels[2].name == "Active Daily") {
            emoLabel3 = emoji(emo.ActiveDaily);
          } else if (response.labels[2].name == "Active Donator") {
            emoLabel3 = emoji(emo.ActiveDonator);
          } else if (response.labels[2].name == "Amateur Attacker") {
            emoLabel3 = emoji(emo.AmateurAttacker);
          } else if (response.labels[2].name == "Hungry Learner") {
            emoLabel3 = emoji(emo.AngryLearner);
          } else if (response.labels[2].name == "Base Designing") {
            emoLabel3 = emoji(emo.BaseDesigning);
          } else if (response.labels[2].name == "Builder Base") {
            emoLabel3 = emoji(emo.BuilderBase);
          } else if (response.labels[2].name == "Clan Capital") {
            emoLabel3 = emoji(emo.ClanCapital);
          } else if (response.labels[2].name == "Clan Games") {
            emoLabel3 = emoji(emo.ClanGames);
          } else if (response.labels[2].name == "Clan Wars") {
            emoLabel3 = emoji(emo.ClanWars);
          } else if (response.labels[2].name == "Clan War League") {
            emoLabel3 = emoji(emo.ClanwarLeague);
          } else if (response.labels[2].name == "Competitive") {
            emoLabel3 = emoji(emo.Competitive);
          } else if (response.labels[2].name == "Farming") {
            emoLabel3 = emoji(emo.Farming);
          } else if (response.labels[2].name == "Friendly Wars") {
            emoLabel3 = emoji(emo.FriendlyWars);
          } else if (response.labels[2].name == "Friendly") {
            emoLabel3 = emoji(emo.Friendly);
          } else if (response.labels[2].name == "Newbie Friendly") {
            emoLabel3 = emoji(emo.Newbie);
          } else if (response.labels[2].name == "Talkative") {
            emoLabel3 = emoji(emo.Talkative);
          } else if (response.labels[2].name == "Teacher") {
            emoLabel3 = emoji(emo.Teacher);
          } else if (response.labels[2].name == "Trophy Pushing") {
            emoLabel3 = emoji(emo.TrophyPushing);
          } else if (response.labels[2].name == "Veteran") {
            emoLabel3 = emoji(emo.Veteran);
          } else if (response.labels[1].name == "International") {
            emoLabel3 = emoji(emo.International);
          } else if (response.labels[1].name == "Underdog") {
            emoLabel3 = emoji(emo.Underdog);
          } else if (response.labels[1].name == "Relaxed") {
            emoLabel3 = emoji(emo.Relaxed);
          } else {
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
