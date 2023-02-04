const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_leadership",
  description: "Commander List + Talent tree in leadership",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Æthelflæd",
          value: "Aethelflaed",
        },
        {
          name: "Charlemagne",
          value: "charlemagne",
        },
        {
          name: "Frederick I",
          value: "frederick",
        },
        {
          name: "Hannibal Barca",
          value: "hannibal",
        },
        {
          name: "Hermann",
          value: "hermann",
        },
        {
          name: "Honda Tadakatsu",
          value: "honda",
        },
        {
          name: "Julius Caesar",
          value: "jc",
        },
        {
          name: "LuBu",
          value: "lubu",
        },
        {
          name: "Mehmed II",
          value: "mehmed",
        },
        {
          name: "Moctezuma I",
          value: "moc",
        },
        {
          name: "Osman I",
          value: "osman",
        },
        {
          name: "Ragnar Lodbrok",
          value: "ragnar",
        },
        {
          name: "Scipio Africanus",
          value: "scipio",
        },
        {
          name: "Sulleiman I",
          value: "sull",
        },
        {
          name: "Theodora",
          value: "theodora",
        },
        {
          name: "Trajan",
          value: "trajan",
        },
        {
          name: "Wu Zetian",
          value: "wu",
        },
        {
          name: "Yi Sun Sin",
          value: "yss",
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

    if (com == "Aethelflaed") {
      embed.setColor("#FFDC00");
      embed.setTitle("Æthelflæd");
      embed.setURL("https://www.rok.guide/aethelflaed/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069976313881964604/Aethelflaed_full-1-530x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069978222810378290/aethelflaed-mixed-troops-talent-tree.png"
      );
      embed.setDescription(
        `Aethelflaed is by far the most useful commander in every aspect of Rise of Kingdoms. A lot of people will say that Aethelflaed is there for free to play players but that is not true. Most of the pay to win players will use her in fights because of the first skill.\n\n__Best Pairing Primary:__ \n` +
          emoji(emo.MehmedII) +
          emoji(emo.JoanofArc1) +
          emoji(emo.YiSeongGye) +
          emoji(emo.OsmanI) +
          emoji(emo.SunTzu) +
          emoji(emo.FrederickI) +
          `\n\n__Best Pairing Secondary:__ \n` +
          emoji(emo.RichardI) +
          emoji(emo.Baibars) +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.Belisarius) +
          `__Video Guide :__\n>>> **[Guide Free commander](https://youtu.be/FrT0Kao_p-A)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360449805631639/Aethelflaed.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeper* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433389292834826/aethelflaed-specific-troops-talent-tree.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433411224850543/aethelflaed-farming-talent-tree.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "charlemagne") {
      embed.setColor("#FFDC00");
      embed.setTitle("Charlemagne");
      embed.setURL("https://www.rok.guide/Charlemagne/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069979789458419722/Charlemagne_full-1-397x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069980050683875458/charlemagne-rally-mixed-troops.png"
      );
      embed.setDescription(
        `Charlemagne is a legendary commander that was part of a reward in the first KVK in Rise of Kingdoms. The only purpose of Charlemagne is to rally city. Unfortunately, Charlemagne by far one of the worst legendary commanders in Rise Of kingdoms.\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360411276750878/Charlemagne.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
            emoji(emo.etoile_vide) +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434096632844418/charlemagne-rally-build-conquering-talents.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434127385464852/charlemagne-rally-build-skill.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "frederick") {
      embed.setColor("#FFDC00");
      embed.setTitle("Frederick I");
      embed.setURL("https://www.rok.guide/commanders/frederick-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069981754816995378/frederick-1-1-228x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1069982178060021820/Frederick-I-Rally-Build-Mixed-Troops.png"
      );
      embed.setDescription(
        `Frederick I is one of the first legendary commanders in Rise of Kingdoms. He was great when Rise Of Kingdoms was released but now Frederick is not so good. Do not invest universal legendary sculptures in Frederick, it is not worth it now and you can get him gold chests.\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360342565670972/Frederick-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434417111207976/Frederick-I-Rally-Build-Conquering.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434439466856458/Frederick-I-Rally-Build-Skill.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "hannibal") {
      embed.setColor("#FFDC00");
      embed.setTitle("Hannibal Barca");
      embed.setURL("https://www.rok.guide/commanders/Hannibal%20Barca/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070074771057938464/Hannibal-Barca_full-1-291x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070075031004127262/hannibal-barca-open-field.png"
      );
      embed.setDescription(
        `Hannibal Barca is a great commander to have on new kingdoms but for old kingdoms he is bad. Hannibal Barca talent tree is designed for a mixed army and attacking city. You can obtain Hannibal Barca only with purchasing chests.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.JuliusCaesar) +
          emoji(emo.Charlemagne) +
          emoji(emo.FrederickI) +
          emoji(emo.MehmedII) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360343014445137/Hannibal-Barca.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070434724461416560/hannibal-barca-rally-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "honda") {
      embed.setColor("#FFDC00");
      embed.setTitle("Honda Tadakatsu");
      embed.setURL("https://www.rok.guide/commander/honda-tadakatsu/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292682809426/honda-tadakatsu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070077621909594222/honda-tadakatsu-talents-1024x595.png"
      );
      embed.setDescription(
        `Honda Tadakatsu is a new commander with many great abilities, but he requires a lot of rages. Honda Tadakatsu is a commander that is decent for rallies and field battels.\n\nWhat is great about Honda Tadakatsu is that you can use mixed troops with him and probably you will. Now is it worth investing in Honda Tadakatsu? Yes if you are pay to win player but if you are free to play probably not.\n\n__Best Pairing :__ \n` +
          emoji(emo.Suleiman) +
          emoji(emo.Trajan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292682809426/honda-tadakatsu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
    } else if (com == "jc") {
      embed.setColor("#FFDC00");
      embed.setTitle("Julius Caesar");
      embed.setURL("https://www.rok.guide/commanders/julius-caesar/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070078561865707571/Julius-Caesar_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070078806020341890/julius-talent-tree-1-1024x576.png"
      );
      embed.setDescription(
        `Julius Caesar is still one of the great legendary commanders in Rise of Kingdoms and with the right talent tree build is used for attacking cities but he is a great tank too. He can be obtained with golden chests so do not use universal sculptures on him.

\n\n__Best Pairing :__ \n` +
          emoji(emo.Boudica) +
          emoji(emo.SunTzu) +
          emoji(emo.Aethelflaed) +
          emoji(emo.CharlesMartel)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291567124561/Julius-Caesar.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "lubu") {
      embed.setColor("#FFDC00");
      embed.setTitle("Lu Bu");
      embed.setURL("https://www.rok.guide/lu-bu");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245996007504/lu-bu.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070080834020851732/lu-bu-mixed-troops-talent-build.png"
      );
      embed.setDescription(
        `Lu Bu is a legendary commander that is focused on Leadership and Conquering with nice skill damage. Lu Bu is a commander that was made with collaboration between Rise Of Kingdoms and Dynasty Warriors 9.

\n\n__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.HannibalBarca) +
          emoji(emo.Attila) +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.Charlemagne)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245996007504/lu-bu.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435160622891069/lu-bu-conquering-talent-build.png"
      );
      embed3.setColor("#FFDC00");
      embed3.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435191572664453/lu-bu-skill-talent-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2, embed3] });
    } else if (com == "mehmed") {
      embed.setColor("#FFDC00");
      embed.setTitle("Mehmed II");
      embed.setURL("https://www.rok.guide/commanders/mehmed-ii/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070081356077469876/Mehmed_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070081773091958875/mehmed-ii-openfield-talent-tree-build.png"
      );
      embed.setDescription(
        `Mehmed is a Conquering commander that is designed to destroy cities in Rise Of Kingdoms. You can obtain Mehmed in gold chests. You can use him for field battles but because of Mehmed's talent tree and skills, he is pure tier S+ commander for rallying cities.

\n\n__Best Pairing :__ \n` +
          emoji(emo.FrederickI) +
          emoji(emo.HannibalBarca) +
          emoji(emo.JuliusCaesar)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243529756694/Mehmed-II.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_plein) +
            emoji(emo.etoile_vide) +
            "*",
          inline: true,
        }
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "moc") {
      embed.setColor("#FFDC00");
      embed.setTitle("Moctezuma I");
      embed.setURL("https://www.rok.guide/moctezuma-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244263764028/moctezuma-i.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070083138572779651/Moctezuma-I-PVE-Skill-Build.png"
      );
      embed.setDescription(
        `Moctezuma I is the perfect commander to destroy or assault any type of PVE structures in KVK or the Lost Kingdom, Camps, Crusader Fortresses, Shrines, Hieron, Pass, Circles, Ziggurat, etc.\n\nEverything will be conquered much easier by using this commander.

\n\n__Best Pairing :__ \n` +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.guan) +
          emoji(emo.YiSeongGye) +
          emoji(emo.diaochan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244263764028/moctezuma-i.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.leadership) +
          `  *Leadership* ` +
          emoji(emo.peacekeeping) +
          `  *Peacekeeping* ` +
          emoji(emo.skill) +
          `  *Skill*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435526823387146/Moctezuma-I-PVE-Peacekeeping-Build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "ragnar") {
      embed.setColor("#FFDC00");
      embed.setTitle("Ragnar Lodbrok");
      embed.setURL("https://www.rok.guide/ragnar-lodbrok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466129862666/Ragnar-Lodbrok.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070087045533417705/Ragnar-Lodbrok-open-field-mixed-troops.png"
      );
      embed.setDescription(
        `Ragnar Lodbrok is a legendary commander in Rise Of Kingdoms that is specialized in attacking and conquering cities and he is great for PVP. Ragnar Lodbrok’s talent tree is focused on attacking cities.

\n\n__Best Pairing :__ \n` +
          emoji(emo.Trajan) +
          emoji(emo.lubu1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466129862666/Ragnar-Lodbrok.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
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

      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070435818705002507/Ragnar-Lodbrok-rally-build-mixed-troops.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "sull") {
      embed.setColor("#FFDC00");
      embed.setTitle("Sulleiman I");
      embed.setURL("https://www.rok.guide/commander/suleiman-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197434355792/Suleiman.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070090911977058384/suleiman-rally-build-1024x595.png"
      );
      embed.setDescription(
        `Suleiman is a legendary commander in Rise of Kingdoms who excels at leadership, conquering, and attacking. Suleiman is a commander for pay to win players. If you are a low-spender or a free-to-play player, he is not worthy of your gold sculptures. 

\n\n__Best Pairing :__ \n` +
          emoji(emo.Trajan) +
          emoji(emo.hondatadakatsu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197434355792/Suleiman.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
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

      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436114898370650/suleiman-openfield-build-1024x595.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "theodora") {
      embed.setColor("#FFDC00");
      embed.setTitle("Theodora");
      embed.setURL("https://www.rok.guide/theodora/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070091582189080696/Theodora_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070091779476553788/theodora-garrison-build-2.png"
      );
      embed.setDescription(
        `Theodora is a legendary commander. She is a very strong commander for defending objectives. Theodora can only be used in kingdoms which have been opened for more than 310 days.

\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.YiSunsin)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360207672660069/Theodora.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
            emoji(emo.etoile_vide) +
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436344045777026/theodora-garrison-build.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "trajan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Trajan");
      embed.setURL("https://www.rok.guide/Trajan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098624929895/Trajan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070093125114134649/trajan-openfield-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.ConstantineI) +
          emoji(emo.HannibalBarca) +
          emoji(emo.lubu1) +
          emoji(emo.mulan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360098624929895/Trajan.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.leadership) +
          `  *Leadership* ` +
          emoji(emo.vesatility) +
          `  *Versatile* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "wu") {
      embed.setColor("#FFDC00");
      embed.setTitle("Wu Zetian");
      embed.setURL("https://www.rok.guide/wu-zetian/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070093704112648303/Wu-Zetian_full-1-354x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070094258666745996/wu-zetian-talent-tree-1024x739.png"
      );
      embed.setDescription(
        `Wu Zetian is a type of commander that is good only for pay to win players. Wu Zetian's only role is to defend building nothing else. Very bad commander for field fights.

\n\n__Best Pairing :__ \n` +
          emoji(emo.YiSeongGye) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          emoji(emo.Saladin) +
          emoji(emo.SunTzu) +
          emoji(emo.CaoCao) +
          emoji(emo.KusunokiMasashige) +
          emoji(emo.ElCid)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360099207938058/Wu-Zetian.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
            emoji(emo.etoile_vide) +
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436608970596392/wu-zetian-talent-tree-open-field-1024x650.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "yss") {
      embed.setColor("#FFDC00");
      embed.setTitle("Yi Sun Sin");
      embed.setURL("https://www.rok.guide/yi-sun-sin/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070095171355680828/Yi-Sun-Sin_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070095464206184559/yi-sun-sin-alternative-garrison-build.png"
      );
      embed.setDescription(
        `Yi Sun-Sin is a legendary infantry commander that can only be used in kingdoms which have been opened for more than 310 days.

\n\n__Best Pairing :__ \n` +
          emoji(emo.WuZetian) +
          emoji(emo.Theodora)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360100030021712/Yi-Sun-sin.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
            emoji(emo.etoile_vide) +
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
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070436755959972021/yi-sun-sin-garrison-build-2.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "osman") {
      embed.setColor("#C100FF");
      embed.setTitle("Osman I");
      embed.setURL("https://www.rok.guide/commanders/osman-i/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070085326732808192/Osman_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070085571160047778/osman-I-open-field-build-1024x640.png"
      );
      embed.setDescription(
        `Osman is a great commander for new players who do not have nuking legendary commanders especially for new servers in Rise Of Kingdoms. Osman Talent Tree is bad for field fights so you will usually use him as a secondary commander.

\n\n__Best Pairing :__ \n` +
          emoji(emo.SunTzu) +
          emoji(emo.ScipioAfricanus) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360245186510878/Osman-I.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
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
    } else if (com == "scipio") {
      embed.setColor("#C100FF");
      embed.setTitle("Scipio Africanus");
      embed.setURL("https://www.rok.guide/commanders/scipio-africanus/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070088896534286366/Scipio_full-1-634x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070089244384710716/scipio-africanus-talent-tree.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.JuliusCaesar) +
          emoji(emo.CharlesMartel) +
          emoji(emo.EuljiMundeok) +
          emoji(emo.JoanofArc1) +
          emoji(emo.OsmanI)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360196939431966/Scipio-Africanus.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.leadership) +
            `  *Leadership* ` +
            emoji(emo.conquering) +
            `  *Conquering* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
