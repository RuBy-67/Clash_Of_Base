const { MessageEmbed, Message } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_integration",
  description: "Commander List + Talent tree in integration",
  options: [
    {
      name: "commanders",
      description: "Witch commander ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Boudica",
          value: "boudica",
        },
        {
          name: "Cleopatra VII",
          value: "cleopatra",
        },
        {
          name: "Diaochan",
          value: "diaochan",
        },
        {
          name: "Ishida Mitsunari",
          value: "ishida",
        },
        {
          name: "Joan of Arc",
          value: "joan",
        },
        {
          name: "Lohar",
          value: "lohar",
        },
        {
          name: "Mathilda of Flanders",
          value: "mathilda",
        },
        {
          name: "Mulan",
          value: "mulan",
        },
        {
          name: "Queen Tamar of Georgia",
          value: "tamar",
        },
        {
          name: "Seondeok",
          value: "seondeok",
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

    if (com == "boudica") {
      embed.setColor("#C100FF");
      embed.setTitle("Boudica");
      embed.setURL(
        "https://cdn.rok.guide/wp-content/uploads/2019/02/boudica-294x300.png"
      );
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070104348551565423/boudica-294x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070104677296914513/boudica-peacekeeping-talent-tree.png"
      );
      embed.setDescription(
        `Boudica is a great commander for players who just started with Rise of Kingdoms. With Boudica, you can kill barbarians, forts, boost the experience . For PVP she is great on new servers but on old, she will not perform well next to strong legendary commander.\n\n__Best Pairing PVE:__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.lohar) +
          emoji(emo.diaochan) +
          emoji(emo.CharlesMartel) +
          `\n\n__Best Pairing PVP :__ \n` +
          emoji(emo.RichardI) +
          emoji(emo.Aethelflaed) +
          emoji(emo.SunTzu)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360410647605308/Boudica.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "cleopatra") {
      embed.setColor("#FFDC00");
      embed.setTitle("Cleopatra VII");
      embed.setURL(
        "https://cdn.rok.guide/wp-content/uploads/2019/02/boudica-294x300.png"
      );
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070106043423658074/Cleopatra_full.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070106320910434394/cleopatra-gathering-high-level-build.png"
      );
      embed.setDescription(
        `Cleopatra is a legendary gathering commander in Rise of kingdoms. She is a pretty bad commander and the only use of Cleopatra is gathering with gathering talent tree build. You can obtain Cleopatra with events and with gold chests. Do not invest universal legendary sculptures on her.\n\n__Best Pairing :__ \n` +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360466645762089/Cleopatra-VII.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.garrison) +
          `  *Garrison* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "diaochan") {
      embed.setColor("#C100FF");
      embed.setTitle("Diaochan");
      embed.setURL("https://www.rok.guide/diaochan/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341412237413/diaochan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070107576978649128/diaochan-peacekeeping-talent-tree-build.png"
      );
      embed.setDescription(
        `Diaochan is an epic peacekeeping commander with supporting skills. She is a commander that was created in collaboration between Rise Of Kingdoms and Dynasty Warriors 9.\n\n__Best Pairing :__ \n` +
          emoji(emo.mulan) +
          emoji(emo.lubu1) +
          emoji(emo.CaoCao) +
          emoji(emo.YiSeongGye) +
          emoji(emo.RichardI) +
          emoji(emo.lohar)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360341412237413/diaochan.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ishida") {
      embed.setColor("#FFDC00");
      embed.setTitle("Ishida Mitsunari");
      embed.setURL("https://www.rok.guide/commanders/ishida-mitsunari/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070108092643156048/Ishida-Mitsunari_full-1.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070108403751464960/Ishida-Mitsunari-talent-tree.png"
      );
      embed.setDescription(
        `Ishida Mitsunari is a rage generating machine. Problem is that his other skills are not great for PVP Fights. He can be good for free to players who just started playing Rise Of kingdoms.\n\nHe can be good for stealing resources from the city because he haves a 50% bonus load.\n\nIshida Mitsunari is gathering commander and he can only be used in new kingdoms where people do not have all commanders. Use Him only as a secondary commander. Do not waste your XP and golden stars on him.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1) +
          emoji(emo.MatildaofFlanders)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360292993183794/Ishida-Mitsunari-1_1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.gathering) +
          `  *Peacekeeping* ` +
          emoji(emo.support) +
          `  *Support*`,
      });
      return interaction.reply({ embeds: [embed] });
    } else if (com == "joan") {
      embed.setColor("#C100FF");
      embed.setTitle("Joan of Arc");
      embed.setURL("https://www.rok.guide/commanders/joan-of-arc/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070109195359227964/joan-of-arc-179x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070109433989967952/joan-of-arc-gathering-build-1024x578.png"
      );
      embed.setDescription(
        `Joan Of Arc is the best support and farming commander in the Rise Of Kingdoms. She is a great early, mid and late game. With the right talent tree build, Joan Of Arc will give an insane amount of support buffs for your and alliance troops.\n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360291265118319/Joan-of-Arc_1.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gathering* ` +
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

      embed2.setColor("#C100FF");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070433028335222894/joan-of-arc-support-build-1024x578.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "lohar") {
      embed.setColor("#C100FF");
      embed.setTitle("Lohar");
      embed.setURL("https://www.rok.guide/commanders/lohar");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070110251652755597/lohar-238x300.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070110715949629440/lohar-pve-build-1024x631.png"
      );
      embed.setDescription(
        `Lohar is the best peacekeeper in the Rise of Kingdoms. His role is pretty special compared to other commanders because he was basically created to be used in a player vs. environment setting (PvE), so his expertise lies in killing barbarians.  He has a very specific role in the game that no other commander can take. But without context, his importance can be easily overlooked. His skills revolve around damage to barbarians and healing potential. \n\n__Best Pairing :__ \n` +
          emoji(emo.Aethelflaed) +
          emoji(emo.CaoCao) +
          emoji(emo.Boudica) +
          emoji(emo.diaochan)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360467203600515/Lohar.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
            emoji(emo.support) +
            `  *Support*`,
        },
        {
          name: "Overall :",
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
    } else if (com == "mathilda") {
      embed.setColor("#C100FF");
      embed.setTitle("Mathilda of Flanders");
      embed.setURL("https://www.rok.guide/matilda-of-flanders/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243336822835/Matilda-of-Flanders.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070111587723120670/Matilda-of-Flanders-gathering-talent-tree.png"
      );
      embed.setDescription(
        `Matilda of Flanders is an epic gathering commander available in Expedition and Tavern. She is an excellent gathering commander. When you reach the maximum level of all Matilda of Flanders, you will receive an additional 10% resources upon completion of the gathering. Matilda of Flanders is an excellent choice for free-to-play players.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.Seondeok1) +
          emoji(emo.JoanofArc1)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360243336822835/Matilda-of-Flanders.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gatering* ` +
            emoji(emo.defense) +
            `  *Defense*`,
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
    } else if (com == "mulan") {
      embed.setColor("#FFDC00");
      embed.setTitle("Mulan");
      embed.setURL("https://www.rok.guide/mulan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070112563167232110/Rise-of-Kingdoms-mulan.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070112796269871244/mulan_peacekeeping_talents-1024x800.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.RichardI) +
          emoji(emo.Saladin) +
          emoji(emo.ConstantineI) +
          emoji(emo.CharlesMartel) +
          `__Video Guide :__\n>>> **[Mulan Guides](https://youtu.be/iQ_KweClWvU)**`
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360244632858725/mulan.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.peacekeeping) +
            `  *Peacekeeping* ` +
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
      return interaction.reply({ embeds: [embed] });
    } else if (com == "tamar") {
      embed.setColor("#C100FF");
      embed.setTitle("Queen Tamar of Georgia");
      embed.setURL("https://www.rok.guide/commander/queen-tamar-of-georgia/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070114274522959974/bWFyLnBuZw.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070114960543322212/queen-tamar-of-georgia-gathering-build-1024x587.png"
      );
      embed.setDescription(
        `__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.Seondeok1) +
          emoji(emo.IshidaMitsunari11)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1070114274522959974/bWFyLnBuZw.png",
      });
      embed.setFields(
        {
          name: "Specialties :",
          value:
            "\u200B" +
            emoji(emo.integration) +
            `  *Integration* ` +
            emoji(emo.gathering) +
            `  *Gathering* ` +
            emoji(emo.support) +
            `  *Support*`,
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
      embed2.setColor("");
      embed2.setImage("");
      return interaction.reply({ embeds: [embed, embed2] });
    } else if (com == "seondeok") {
      embed.setColor("#FFDC00");
      embed.setTitle("Seondeok");
      embed.setURL("https://www.rok.guide/seondeok/");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1070115527952965702/Seondeok_full-1-340x630.png"
      );
      embed.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070115674451615925/seondeok-farming-talent-build.png"
      );
      embed.setDescription(
        `Seondeok is one more legendary gathering commander in Rise of Kingdoms. The only use of Seondeok is to farm resources with gathering talent tree build. Do not invest legendary universal sculptures on her. Seondeok can be obtained with a golden chest.\n\n__Best Pairing :__ \n` +
          emoji(emo.CleopatraVII) +
          emoji(emo.JoanofArc1) +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.MatildaofFlanders)
      );
      embed.setAuthor({
        name: "rok-guide",
        iconURL:
          "https://cdn.discordapp.com/attachments/1069360006908084245/1069360197165912174/Seondeok_1.png",
      });
      embed.setFields({
        name: "Specialties :",
        value:
          "\u200B" +
          emoji(emo.integration) +
          `  *Integration* ` +
          emoji(emo.gathering) +
          `  *Gathering* ` +
          emoji(emo.attack) +
          `  *Attack*`,
      });
      embed2.setColor("#FFDC00");
      embed2.setImage(
        "https://cdn.discordapp.com/attachments/1069720356379709595/1070427551996051516/seondeok-farming-talent-build-level-60.png"
      );
      return interaction.reply({ embeds: [embed, embed2] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
