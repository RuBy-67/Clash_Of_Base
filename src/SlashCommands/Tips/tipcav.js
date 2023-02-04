const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_cavalry",
  description: "Commander List + Talent tree in cavalry",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Resume pairing cav",
          value: "resume",
        },
        {
          name: "Attila",
          value: "attila",
        },
        {
          name: "Alexander Nevsky",
          value: "alexander",
        },
        {
          name: "Baibars",
          value: "baibars",
        },
        {
          name: "Belisarius",
          value: "belisarius",
        },
        {
          name: "Bertrand du Guesclin",
          value: "bertrand",
        },
        {
          name: "CaoCao",
          value: "caocao",
        },
        {
          name: "Chandragupta Maurya",
          value: "chandragupta",
        },
        {
          name: "Genghis Khan",
          value: "genghis",
        },
        {
          name: "Jadwiga",
          value: "jadwiga",
        },
        {
          name: "Jan Zizka",
          value: "jan",
        },
        {
          name: "Joan of arc Prime",
          value: "joan",
        },
        {
          name: "Minamoto no Yoshitsune",
          value: "minamoto",
        },
        {
          name: "Pelagius",
          value: "pelagius",
        },
        {
          name: "Saladin",
          value: "saladin",
        },
        {
          name: "Takeda shingen",
          value: "takeda",
        },
        {
          name: "William I",
          value: "william",
        },
        {
          name: "Xiang Yu",
          value: "xiang",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("commanders");
    const embed = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });
    const embed2 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });
    const embed3 = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "attila") {
      embed.setColor("#FFDC00");
      embed.setTitle("Attila");
      embed.setURL("https://www.rok.guide/attila/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070796406136258590/Attila_full-1-596x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070797471875342376/attila-talent-tree.png"
      );
      embed.setDescription(
        `Attila is the best cavalry commander in Rise of Kingdoms. There is no commander in Rise Of Kingdoms that can stop Attila from doing an insane amount of damage. After nerf Attila is still strongest commander. His main mission is to rally buildings.\n\n__Best Pairing :__ \n` +
          emoji(emo.TakedaShingen)`\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> **[Attila x Takeda](https://youtu.be/Ew-aJ3UhNsA)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466352152667/Attila.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Garrison* ` +
            emoji(emo.attack) +
            `  *Attack*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "alexander") {
      embed.setColor("#FFDC00");
      embed.setTitle("Alexander Nevsky");
      embed.setURL("https://www.rok.guide/commander/alexander-nevsky/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070804040620970126/alexander-nevsky-talents-1024x575.png"
      );
      embed.setDescription(
        `Alexander Nevsky is the most powerful legendary cavalry commander in Rise Of Kingdoms, providing an insane amount of nuke and survivability. The talent tree of Alexander Nevsky is excellent, but you do not require it because he is the commander you will use as secondary commander the majority of the time, and we all know that the secondary commander's talent tree does not work.\n\n__Best Pairing :__ \n` +
          emoji(emo.xiangyu) +
          emoji(emo.WilliamI) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.ChandraguptaMaurya1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450074062868/alexander-nevsky.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "bertrand") {
      embed.setColor("#FFDC00");
      embed.setTitle("Bertrand du Guesclin");
      embed.setURL("https://www.rok.guide/commander/Bertrand-du-Guesclin/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410031042631/bertrand-du-guesclin.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070807405815934976/Bertrand-Conqueroring-Talent-Tree-Build-1024x468.png"
      );
      embed.setDescription(
        `Bertrand du Guesclin is one of the two commanders introduced to Rise of Kingdoms along with Alexander Nevsky. Bertrand is a legendary commander that specializes in cavalry, conquering, and defense. If you are looking for a legendary cavalry commander to join your ranks, we will tell you this right now: Bertrand isn't a great commander based on his skill set.\n\n__Best Pairing :__ \n` +
          emoji(emo.Attila) +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.GenghisKhan1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410031042631/bertrand-du-guesclin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalery* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.defense) +
            `  *Defense*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070807421653626920/Bertrand-PvP-Talent-Tree-Build-1024x468.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "caocao") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cao Cao");
      embed.setURL("https://www.rok.guide/commanders/cao-cao/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070808810815496262/cao-cao-300x285.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070808655353622718/cao-cao-king-of-speed-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.Saladin) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.TakedaShingen) +
          emoji(emo.Aethelflaed) +
          emoji(emo.Baibars) +
          emoji(emo.Boudica)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410844729475/Cao-Cao.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.cavalry) +
          `  *Cavalry* ` +
          emoji(emo.peacekeeping) +
          `  *Peacekeeping* ` +
          emoji(emo.mobility) +
          `  *Mobility*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://media.discordapp.net/attachments/1069720356379709595/1070808676379668561/cao-cao-openfield-build.png?width=960&height=698"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "chandragupta") {
      embed.setColor("#FFDC00");
      embed.setTitle("Chandragupta Maurya");
      embed.setURL("https://www.rok.guide/chandragupta-maurya/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070809243613143171/Chandragupta-Maurya_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070809880136532018/Chandragupta-Rally-Talent-Build.png"
      );
      embed.setDescription(
        `Chandragupta Maurya is a legendary Conquering commander that can be used on kingdoms which have been open for more than 310 days. He looks like a great commander but we will see how he is performing on in PVP. Chandragupta Maurya needs to be tested but he was just realized so you have to wait for In-depth guide, talent tree and pairs.\n\n__Best Pairing :__ \n` +
          emoji(emo.WilliamI) +
          emoji(emo.TakedaShingen) +
          emoji(emo.GenghisKhan1) +
          emoji(emo.Attila) +
          emoji(emo.Saladin) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> [Chandragupta Maurya guide](https://youtu.be/RNomkqOsqLU)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411104772096/Chandragupta-Maurya_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070809900189487184/Chandragupta-Openfield-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "genghis") {
      embed.setColor("#FFDC00");
      embed.setTitle("Genghis Khan");
      embed.setURL("https://www.rok.guide/genghis-khan/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070811033654005760/genghis-khan-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070811842080935967/genghis-khan-talent-tree.png"
      );
      embed.setDescription(
        `Genghis Khan is one of the best legendary cavalry commanders in Rise Of Kingdoms. The amount of nuke that Genghis Khan is providing is insane. Great commander to have. you can use Genghis Khan for a rally, field fighting and in some situations for defending.\n\n__Best Pairing :__ \n` +
          emoji(emo.Pelagius) +
          emoji(emo.Baibars) +
          emoji(emo.CaoCao) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.Belisarius) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> [Genghis Khan Walkthrough](https://youtu.be/2D10yudDdIs)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342762790912/Genghis-Khan_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "jadwiga") {
      embed.setColor("#FFDC00");
      embed.setTitle("Jadwiga");
      embed.setURL("https://www.rok.guide/jadwiga");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070813041559601152/Jadwiga.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` + emoji(emo.WuZetian) + emoji(emo.Theodora)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070813041559601152/Jadwiga.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.cavalry) +
          `  *Cavalry* ` +
          emoji(emo.garrison) +
          `  *Garrison* ` +
          emoji(emo.mobility) +
          `  *Mobility*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "jan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Jan Zizka");
      embed.setURL("https://www.rok.guide/commander/jan-zizka/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291013476553/jan-zizka-x500.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070815034751590420/Jan-Zizka-Talent-Tree-Build-1163x630.png"
      );
      embed.setDescription(
        `Jan Zizka is a legendary cavalry commander in Rise of Kingdoms with cavalry, garrison, and skill talent tree. Jan Zizka is one of the strongest commanders when it comes to defending objectives in KVK and AOO but when it comes to rallying and fighting in the open field he will underperform. The majority of his skills are focused on garrison so there is no point in using him in open-field fighting. \n\n__Best Pairing :__ \n` +
          emoji(emo.Jadwiga) +
          `\nJadwiga In prime`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291013476553/jan-zizka-x500.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "minamoto") {
      embed.setColor("#FFDC00");
      embed.setTitle("Minamoto no Yoshitsune");
      embed.setURL("https://www.rok.guide/commanders/minamoto-no-yoshitsune/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070816162801258536/Minamoto_full-1-398x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816751979339808/openfield-minamoto-talent-tree-1024x715.png"
      );
      embed.setDescription(
        `Minamoto No Yoshitsune is the best cavalry commander for new players in Rise of kingdoms. With the right Minamoto talent tree build and pairs, he will do an insane amount of nuke. You can use Minamoto No Yoshitsune for field battles, rally, destroying barbarians and barbarians fort.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.CaoCao) +
          emoji(emo.Saladin) +
          emoji(emo.Pelagius) +
          emoji(emo.AlexandertheGreat)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243739467806/Minamoto-no-Yoshitsune.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816772523040799/nuking-minamoto-talent-tree-1024x714.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070816789652574289/peacekeeping-minamoto-talent-tree-1024x721.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "saladin") {
      embed.setColor("#FFDC00");
      embed.setTitle("Saladin");
      embed.setURL("https://www.rok.guide/commanders/saladin");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070817992402800711/Saladin_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070818632025784320/saladin-conquering-talent-tree.png"
      );
      embed.setDescription(
        `Saladin is a legendary cavalry commander that you must have if you are a cavalry player. One of the greatest legendary commanders in the Rise of Kingdoms game includes Saladin talent tree. He is the powerful anti-debuff and the city conqueror.\n\nOne of his abilities is in minimizing the healing effect of the march as well as counterattack damage to decrease tanks on the battleground. Saladin is a fabulous commander to have if you will know how to use it properly. Because of the first skill, Saladin is a great counter to Richard. With 5551 skills and right talent tree build Saladin is an insanely strong commander.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.CaoCao) +
          emoji(emo.TakedaShingen) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.YiSeongGye) +
          emoji(emo.FrederickI) +
          emoji(emo.Baibars) +
          emoji(emo.OsmanI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198856224898/Saladin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.support) +
            `  *Support*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070818652930187394/saladin-open-field-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "takeda") {
      embed.setColor("#FFDC00");
      embed.setTitle("Takeda Shingen");
      embed.setURL("https://www.rok.guide/takeda-shingen/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070819321955233832/Takeda_full-1-539x630.pngg"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.Attila)`\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> [Takeda, Bad ?](https://youtu.be/g3suKMkoPKA)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197920886886/Takeda-Shingen.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.mobility) +
            `  *Mobility*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "william") {
      embed.setColor("#FFDC00");
      embed.setTitle("William I");
      embed.setURL("https://www.rok.guide/william-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070822693210964098/Rise-of-Kingdoms-William-I-1-300x292.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070823260331180163/william-open-field-build-Rise-of-Kingdoms.png"
      );
      embed.setDescription(
        `William I is one of best legendary cavalry commander that can be used on kingdoms which have been open for more than 310 days. By looking at his skills he is a very strong commander.\n\n__Best Pairing :__ \n` +
          emoji(emo.GenghisKhan1) +
          emoji(emo.TakedaShingen) +
          emoji(emo.Attila) +
          emoji(emo.Saladin)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098876596314/William-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *cavalry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
            emoji(emo.attack) +
            `  *Attack*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "xiang") {
      embed.setColor("#FFDC00");
      embed.setTitle("Xiang Yu");
      embed.setURL("https://www.rok.guide/xiang-yu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070823865875451914/xiang-yu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824087993192498/xiang-yu-rally-talent-build.png"
      );
      embed.setDescription(
        `Xiang Yu is a Cavalry Conquering commander that provides a lot of nuke damage. Xiang Yu Talent Tree is great for PVP and cavalry players, If you are cavalry players you should get Xiang Yu. He is great for field battles and rallying objectives. Great commander to have in the collection.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070823865875451914/xiang-yu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824116250218496/xiang-yu-open-field-talent-build.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "baibars") {
      embed.setColor("#C100FF");
      embed.setTitle("Baibars");
      embed.setURL("https://www.rok.guide/baibars");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070824606501445752/Baibars_full-531x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824913885216880/baibars-conquering-talent-tree-build-scaled.png"
      );
      embed.setDescription(
        `Baibars is Rise of Kingdoms’ most underappreciated cavalry commander. Because of his first skill, Baibars is a formidable commander. That skill has the potential to deal a massive amount of damage to five targets. Baibars is the only cavalry commander in Rise of Kingdoms who can deal AOE damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.CaoCao) +
          emoji(emo.Pelagius) +
          emoji(emo.SunTzu) +
          emoji(emo.KusunokiMasashige) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__ \n>>> **[Baibars Guide](https://youtu.be/2R1EHCXqQlI)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409460609134/Baibars.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070824925251764244/baibars-skill-talent-tree-build-scaled.png"
      );

      return interaction.reply({ embeds: [embed] });
    } else if (com == "belisarius") {
      embed.setColor("#C100FF");
      embed.setTitle("Belisarius");
      embed.setURL("https://www.rok.guide/commanders/belisarius/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070828038943686766/Belisarius_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828911891591281/Belisarius-speed-build.png"
      );
      embed.setDescription(
        `In Rise Of Kingdoms, Belisarius commands the Epic Cavalry. He is a very useful commander, and if you build the right talent tree for mobility, you will have the fastest troops in Rise Of Kingdoms. Belisarius is also a peacekeeping commander who you will constantly use to hunt barbarians.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.lohar) +
          emoji(emo.diaochan) +
          emoji(emo.Baibars) +
          emoji(emo.Pelagius)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409712263318/Belisarius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.mobility) +
            `  *Mobility*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828927234363432/Belisarius-attack-build.png"
      );
      embed3.setColor("#C100FF");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070828946507174048/Belisarius-peacekeeping-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "pelagius") {
      embed.setColor("#C100FF");
      embed.setTitle("Pelagius");
      embed.setURL("https://www.rok.guide/commanders/pelagius");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070829691985993738/Pelagius_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070829897494319286/pelagius-pve-talent-tree.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Pelagius is the best Epic cavalry epic commander. You'll be relying on him all the time. He will be insanely good in field battles since he has the best talent tree build for cavalry. Pelagius can also be used to defend structures in the early stages of ROK.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245744345108/Pelagius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.cavalry) +
            `  *Cavalry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
            emoji(emo.skill) +
            `  *Skill*`,
        },
        {
          name: "Overall :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Open Field :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Rallying Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Cities :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        },
        {
          name: "Defending Object :",
          value:
            "*" +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070829925860376617/pelagius-pvp-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "resume") {
      embed.setTitle("Best Calvary Commander Pairs");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070808810815496262/cao-cao-300x285.png"
      );
      embed.setDescription(
        emoji(emo.alexandernevsky) +
          " *x* " +
          emoji(emo.xiangyu) +
          " / " +
          emoji(emo.WilliamI) +
          emoji(emo.bertrandduguesclin) +
          "\n" +
          emoji(emo.Jadwiga) +
          " *x* " +
          emoji(emo.Saladin) +
          " / " +
          emoji(emo.YiSunsin) +
          emoji(emo.Theodora) +
          "\n" +
          emoji(emo.xiangyu) +
          " *x* " +
          emoji(emo.alexandernevsky) +
          " / " +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.WilliamI) +
          "\n" +
          emoji(emo.Pelagius) +
          " *x* " +
          emoji(emo.Baibars) +
          " / " +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.Baibars) +
          " *x* " +
          emoji(emo.Aethelflaed) +
          " / " +
          emoji(emo.SunTzu) +
          emoji(emo.MinamotonoYoshitsune) +
          "\n" +
          emoji(emo.Belisarius) +
          " *x* " +
          emoji(emo.CaoCao) +
          " / " +
          emoji(emo.Baibars) +
          emoji(emo.Pelagius) +
          "\n" +
          emoji(emo.MinamotonoYoshitsune) +
          " *x* " +
          emoji(emo.CaoCao) +
          " / " +
          emoji(emo.Pelagius) +
          emoji(emo.Baibars) +
          "\n" +
          emoji(emo.Attila) +
          " *x* " +
          emoji(emo.TakedaShingen) +
          " / " +
          emoji(emo.Saladin) +
          "\n" +
          emoji(emo.GenghisKhan1) +
          " *x* " +
          emoji(emo.Saladin) +
          " / " +
          emoji(emo.Pelagius) +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.Aethelflaed) +
          " *x* " +
          emoji(emo.SunTzu) +
          " / " +
          emoji(emo.JoanofArc1) +
          emoji(emo.Baibars) +
          "\n" +
          emoji(emo.Saladin) +
          " *x* " +
          emoji(emo.GenghisKhan1) +
          " / " +
          emoji(emo.CaoCao) +
          "\n" +
          emoji(emo.CaoCao) +
          " *x* " +
          emoji(emo.MinamotonoYoshitsune) +
          " / " +
          emoji(emo.Belisarius) +
          emoji(emo.Saladin)
      );
      embed.setColor("#F70505");
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
