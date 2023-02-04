const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_infantry",
  description: "Commander List + Talent tree in infantry",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Resume pairing",
          value: "resume",
        },
        {
          name: "Alexander the Great",
          value: "alexandre",
        },
        {
          name: "Charles Martel",
          value: "charles",
        },
        {
          name: "Cheok Jun-gyeong",
          value: "cheok",
        },
        {
          name: "Constantine I",
          value: "constantin",
        },
        {
          name: "Eulji Mundeok",
          value: "eulji",
        },
        {
          name: "Flavius Aetius",
          value: "flavius",
        },
        {
          name: "Guan Yu",
          value: "guan",
        },
        {
          name: "Harald Sigurdssun",
          value: "harald",
        },
        {
          name: "K'inich Janaab' Pakal",
          value: "pakal",
        },
        {
          name: "Lenonidas I",
          value: "leonidas",
        },
        {
          name: "Richard I",
          value: "richard",
        },
        {
          name: "Sargon the great",
          value: "sargon",
        },
        {
          name: "Scipio Africanus Prime",
          value: "scipio",
        },
        {
          name: "Sun Tzu",
          value: "sun",
        },
        {
          name: "Tariq ibn Ziyad",
          value: "tariq",
        },
        {
          name: "Zenobia",
          value: "zenobia",
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

    if (com == "alexandre") {
      embed.setColor("#FFDC00");
      embed.setTitle("Alexander the Great");
      embed.setURL("https://www.rok.guide/alexander-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070447857825501328/alexander-rise-of-kingdoms-181x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448788914835539/alexander_open_field_talents.png"
      );
      embed.setDescription(
        `Alexander the Great is one of the best infantry commander in the Rise of Kingdoms. He will bring an insane amount of damage and defense to infantry troops while supporting other troops with damage absorbing shield. Alexander is a commander that you must have.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "charles") {
      embed.setColor("#FFDC00");
      embed.setTitle("Charles Martel");
      embed.setURL("https://www.rok.guide/commanders/charles-martel/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070451891647033435/charles-martel-264x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070452144345456801/charles-martel-garrison-build.png"
      );
      embed.setDescription(
        `Charles Martel is one of the first infantry legendary commanders in Rise Of Kingdoms. Charles Martel is a commander that you must have. Great for rally, field fighting and defending buildings. Charles Martel will provide a good amount of infantry stats and counter damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.RichardI) +
          emoji(emo.WuZetian) +
          emoji(emo.YiSeongGye) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411549372466/Charles-Martel.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070452165618978946/charles-martel-openfield-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "cheok") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cheok Jun-gyeong");
      embed.setURL("https://www.rok.guide/cheok-jun-gyeong/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409213153420/Cheok-Jun-gyeong-137x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070453378011910205/Cheok-Jun-gyeong-Open-field-Talent-Tree.png"
      );
      embed.setDescription(
        `Cheok Jun-Gyeong is a Legendary infantry commander that came with an update March of the Ages. Cheok Jun-Gyeong is a great commander to have, especially if you focus on infantry commanders. The great thing about this commander is that you can use him for field fighting and rallying. \n\n__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.guan) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Videos Guides :__ \n>>> [Cheok meta ?](https://youtu.be/uTb5QOQaLVc)\n[Pakal x Cheok](https://youtu.be/Cg1gYr_JUpE)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360409213153420/Cheok-Jun-gyeong-137x300.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "constantin") {
      embed.setColor("#FFDC00");
      embed.setTitle("Constantine I");
      embed.setURL("https://www.rok.guide/constantine-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070454769329643680/Constantine_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070455079712329738/Constantine-I-Open-Field-Build.png"
      );
      embed.setDescription(
        `Constantine is a legendary infantry commander that is available for kingdoms that have been open for more than 120 days. Constantine is a great commander and if you are an infantry player you must have him. He is great for Field battles and Defending.\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.RichardI) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343287091380/Constantine-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070455100595769455/Constantine-I-Garrison-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "flavius") {
      embed.setColor("#FFDC00");
      embed.setTitle("Flavius Aetius");
      embed.setURL("https://www.rok.guide/commander/flavius-aetius/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342322385027/flavius-aetius.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070456669101899776/Flavius-Aetius-Damage-Talent-Tree-1120x630.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.cipioprime) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.guan) +
          emoji(emo.Zenobia1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342322385027/flavius-aetius.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070456685539381428/Flavius-Aetius-Garrison-Talent-Tree-1120x630.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "guan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Guan Yu");
      embed.setURL("https://www.rok.guide/guan-yu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070084399770652763/Rise-of-Kingdoms-Guan-Yu-1-293x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070458115331465256/Guan-Yu-Open-Field-Build.png"
      );
      embed.setDescription(
        `GUAN YU is a new infantry commander that is exclusively available for kingdoms older than 240 days. You can get Guan Yu in a wheel of fortune. Guan Yu is a great commander for big field fights in Ark Of Osiris and KVK where he can do his AOE damage.\n\n__Best Pairing :__ \n` +
          emoji(emo.LeonidasI) +
          emoji(emo.RichardI) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.CharlesMartel) +
          emoji(emo.YiSeongGye) +
          emoji(emo.SunTzu) +
          emoji(emo.EuljiMundeok)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070083893534937201/R3Vhbi1ZdS5wbmc.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070458115545366528/Guan-Yu-Rally-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "harald") {
      embed.setColor("#FFDC00");
      embed.setTitle("Harald Sigurdsson");
      embed.setURL("https://www.rok.guide/harald-sigurdsson/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070458769684832336/harald-sigurdsson.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070459081577463979/harald_sigurdsson_open_field_build.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.LeonidasI) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466956132443/Harald-Sigurdsson-1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.conquering) +
          `  *Conquering* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070448983257919498/image.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "pakal") {
      embed.setColor("#FFDC00");
      embed.setTitle("K'inich Janaab' Pakal");
      embed.setURL("https://www.rok.guide/kinich-janaab-pakal/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449478467695/1675021736047.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070460683734499388/Pakal-II-Rally-Talent-Tree.png"
      );
      embed.setDescription(
        `Pakal II is a legendary infantry commander that was introduced with the updated March of the Ages. Pakal II is a strong infantry commander that has a lot of damage reduction and survivability and on top of that, he is doing nice damage. The only downside is that most of his skills are focused on rallying objectives. \n\n__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.CheokJungyeong137x300) +
          emoji(emo.HaraldSigurdsson1)`\n\n` +
          emoji(emo.yt) +
          ` __Videos Guide :__ \n>>> [Pakal x CJG](https://youtu.be/Cg1gYr_JUpE)\n [Pakal testing](https://youtu.be/AyQXYGW_BAE)`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449478467695/1675021736047.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "richard") {
      embed.setColor("#FFDC00");
      embed.setTitle("Richard I");
      embed.setURL("https://www.rok.guide/commanders/richard-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070461942252179548/richard-i-259x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070462304585519125/open-field-pvp-richard-i.png"
      );
      embed.setDescription(
        `Richard is one of the strongest commanders in Rise of Kingdoms. With the right talent tree build and pairing, he will be unstoppable. Richard will provide a good amount of healing, damage reduction, and infantry stats. Overall great commander to have.\n\n__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.JuliusCaesar) +
          emoji(emo.SunTzu) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.HannibalBarca) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198621335602/Richard-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrion* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070462331978530946/garrison-talent-tree-richard-i.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "sargon") {
      embed.setColor("#FFDC00");
      embed.setTitle("Sargon the Great");
      embed.setURL("https://www.rok.guide/commander/sargon-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360199082721390/sargon-the-great-x500-253x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070463782398205962/image.png"
      );
      embed.setDescription(
        `Sar Kissatim is a strong infantry commander, but that does not mean that you should invest in him. The problem with Sar Kissatim is that he doesn’t have active skill damage that will deal instant nuke damage to the target.\n\nWhen his active skill gets activated, you have to attack the target continuously for 5 seconds to get the full effect from him, but we all know that can be hard sometimes, especially when there are big fights. Also, the problem is that he does not have AOE damage skills, which are best for free-to-play players. \n\n__Best Pairing :__ \n` +
          emoji(emo.tariq)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360199082721390/sargon-the-great-x500-253x300.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.vesatility) +
          `  *Versatility* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "scipio") {
      embed.setColor("#FFDC00");
      embed.setTitle("Scipio Africanus [P]");
      embed.setURL("https://www.rok.guide/alexander-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069369222674776234/1675027814433.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070465077314064534/Legendary-Scipio-Africanus-mobility-talent-tree-build-2-1120x630.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070464712078274711/scipio-africanus-legendary.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070465092841381980/Scipio-Africanus-Legendary-Talent-Tree-Build-1120x630.png"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "leonidas") {
      embed.setColor("#FFDC00");
      embed.setTitle("Lenonidas I");
      embed.setURL("https://www.rok.guide/leonidas-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070467298713948160/leonidas-rise-of-kingdoms-265x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070467539177578556/Leonidas-Field-Battle-1024x576.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.guan) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292074635344/Leonidas-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.vesatility) +
            `  *Versatility* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "tariq") {
      embed.setColor("#FFDC00");
      embed.setTitle("Tariq ibn Ziyad");
      embed.setURL("https://www.rok.guide/commander/tariq-ibn-ziyad/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360198118027294/tariq-ibn-ziyad-x500-209x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070470883023519864/image.png"
      );
      embed.setDescription(
        `In Rise of Kingdoms, Tariq ibn Ziyad is a new legendary Infantry commander who is a part of the Arabia civilization. He has the Infantry, Conquering, and Defense talent tree.`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360450401214554/Alexander-the-Great.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.infantry) +
          `  *Infantry* ` +
          emoji(emo.conquering) +
          `  *Conquering* ` +
          emoji(emo.defense) +
          `  *Defense*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "zenobia") {
      embed.setColor("#FFDC00");
      embed.setTitle("Zenobia");
      embed.setURL("https://www.rok.guide/zenobia/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070472058099744848/Zenobia-Rise-of-Kingdoms.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472793466085537/zenobia-garrison-support-talent-tree-infantry.png"
      );
      embed.setDescription(
        `This talent tree built for Zenobia is great for defending objectives and flags. Also you will generate a lot of rage so you can heal more. On top of that, there is bonus damage against cavalry which is great against Attila and Takeda.\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.ConstantineI) +
          emoji(emo.YiSunsin) +
          emoji(emo.YiSunsin) +
          emoji(emo.Theodora) +
          emoji(emo.CharlesMartel) +
          emoji(emo.YiSeongGye) +
          `  \n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[Zenobia x Harald](https://youtu.be/bTNvSTP_Hkw)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100285886514/Zenobia-1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrison* ` +
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
            emoji(emo.etoile_vide) +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472753733451816/zenobia-garrison-support-talent-tree.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070472765993406464/zenobia-garrison-support-talent-tree-alternative.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "eulji") {
      embed.setColor("#C100FF");
      embed.setTitle("Eulji Mundeok");
      embed.setURL("https://www.rok.guide/commanders/eulji-mundeok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070475079152054392/eulji-mundeok-216x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070475423525384252/eulji-field-flad-fight-talent-tree-1024x576.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.CharlesMartel) +
          emoji(emo.RichardI) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.SunTzu) +
          emoji(emo.OsmanI) +
          emoji(emo.Boudica) +
          `\n\n` +
          emoji(emo.yt) +
          ` __Video Guide :__\n>>> **[Water general](https://youtu.be/F5qZsyWgH0s)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342087508058/Eulji-Mundeok.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070475437597278309/eulji-talent-tree-1024x576.png"
      );

      return interaction.reply({ embeds: [embed] });
    } else if (com == "sun") {
      embed.setColor("#C100FF");
      embed.setTitle("Alexander the Great");
      embed.setURL("https://www.rok.guide/alexander-the-great/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070476453822595162/sun-tzu-2-207x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476848414326914/sun-tzu-garrison-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.HannibalBarca) +
          emoji(emo.FrederickI) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.OsmanI) +
          emoji(emo.guan) +
          `  \n\n` +
          emoji(emo.yt) +
          ` __Video Guides :__\n>>> **[Suntzu Guides](https://youtu.be/sptyo_VzrpE)\n [Suntzu complete guide](https://youtu.be/UBR23VSDaAA)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197673435197/Sun-Tzu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.infantry) +
            `  *Infantry* ` +
            emoji(emo.garrison) +
            `  *Garrion* ` +
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
      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476863874543696/sun-tzu-nuking-talent-tree.png"
      );
      embed3.setColor("#C100FF");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070476884749598751/sun-tzu-infantry-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "resume") {
      embed.setTitle("Best Infantry Commander Pairs");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070461942252179548/richard-i-259x300.png"
      );
      embed.setDescription(
        emoji(emo.HaraldSigurdsson1) +
          " *x* " +
          emoji(emo.AlexandertheGreat) +
          " / " +
          emoji(emo.CharlesMartel) +
          emoji(emo.ConstantineI) +
          "\n" +
          emoji(emo.SunTzu) +
          " *x* " +
          emoji(emo.RichardI) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.Aethelflaed) +
          "\n" +
          emoji(emo.RichardI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          "\n" +
          emoji(emo.CharlesMartel) +
          " *x* " +
          emoji(emo.RichardI) +
          " / " +
          emoji(emo.ConstantineI) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.AlexandertheGreat) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.ConstantineI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.guan) +
          " *x* " +
          emoji(emo.AlexandertheGreat) +
          " / " +
          emoji(emo.CheokJungyeong137x300) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.LeonidasI) +
          " *x* " +
          emoji(emo.CharlesMartel) +
          " / " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          "\n" +
          emoji(emo.pakal) +
          " *x* " +
          emoji(emo.CheokJungyeong137x300) +
          " / " +
          emoji(emo.guan) +
          emoji(emo.SunTzu) +
          "\n" +
          emoji(emo.hondatadakatsu) +
          " *x* " +
          emoji(emo.Suleiman) +
          " / " +
          emoji(emo.Trajan) +
          "\n" +
          emoji(emo.Trajan) +
          " *x* " +
          emoji(emo.hondatadakatsu) +
          " / " +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.CharlesMartel) +
          "\n" +
          emoji(emo.cipioprime) +
          " *x* " +
          emoji(emo.guan) +
          " / " +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.AlexandertheGreat) +
          "\n" +
          emoji(emo.flaviusaetius) +
          " *x* " +
          emoji(emo.Zenobia1) +
          " / " +
          emoji(emo.cipioprime) +
          emoji(emo.guan)
      );
      embed.setColor("#F70505");
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
