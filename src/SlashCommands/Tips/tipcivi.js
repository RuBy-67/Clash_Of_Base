const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_civilisation",
  description: "Tips on civilisation",
  options: [
    {
      name: "civilisation",
      description: "Witch civilisations ?",
      required: true,
      type: "STRING",
      choices: [
        {
          name: "Arabia",
          value: "arabia",
        },
        {
          name: "Britain",
          value: "britain",
        },
        {
          name: "Byzantium",
          value: "byzantium",
        },
        {
          name: "China",
          value: "china",
        },
        {
          name: "Egypt",
          value: "egypt",
        },
        {
          name: "France",
          value: "france",
        },
        {
          name: "Germany",
          value: "germany",
        },
        {
          name: "Japan",
          value: "japan",
        },
        {
          name: "Korea",
          value: "korea",
        },
        {
          name: "Rome",
          value: "rome",
        },
        {
          name: "Ottoman",
          value: "ottoman",
        },

        {
          name: "Spain",
          value: "spain",
        },
        {
          name: "Vikings",
          value: "vikings",
        },
      ],
    },
  ],

  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const com = await interaction.options.getString("civilisation");
    const embed = new MessageEmbed().setTimestamp().setFooter({
      text: "Kd 1215",
      iconURL:
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905",
    });

    if (com == "arabia") {
      embed.setTitle("Arabia");
      embed.setColor("#26980F");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432318914681/arabia-flag.png"
      );
      embed.setDescription(
        "__**Starting Commander:**__ " +
          emoji(emo.Baibars) +
          " / *Baibars*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Mamluk) +
          " / *Mamluk*\n\n	__**Perks :**__\n> Increase cavalry attack by 5%\n> Increase damage dealt to barbarians and other neutral units by 10%;\n> Increase damage dealt by rallied armies by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "britain") {
      embed.setTitle("Britain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432570556446/britain-flag.png"
      );
      embed.setColor("#C63101");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Boudica) +
          " / *Boudica*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Longbowman) +
          " / *Longbowman*\n\n	__**Perks :**__\n> Increase archer attack by 5%;\n> Increase troop training speed by 5%;\n> Increase ally garrison capacity by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "byzantium") {
      embed.setTitle("Byzantium");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545946804295/byzantium-flag.png"
      );
      embed.setColor("#8202E6");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Belisarius) +
          " / *Belisarius*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Conquistador) +
          " / *Cataphract*\n\n	__**Perks :**__\n> Increase cavalry health by 5%;\n> Increase stone gathering speed by 10%;\n> Increase Hospital capacity by 15%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "china") {
      embed.setTitle("China");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546269753364/china-flag.png"
      );
      embed.setColor("#F00303");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.SunTzu) +
          " / *Sun Tzu*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_ChuKoNu) +
          " / *ChuKoNu*\n\n	__**Perks :**__\n> Increase troop defense by 3%;\n> Increase action point recovery by 5%;\n> Increase building speed by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "egypt") {
      embed.setTitle("Egypt");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433099042958/1675026165145.png"
      );
      embed.setColor("#DDA700");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.imhotepframe) +
          " / *Imhotep*\n__**Special Units :**__ " +
          emoji(emo.Troop_Janissary) +
          " / *Maryannu*\n\n	__**Perks :**__\n> Increase archer attack by 5%;\n> Increase damage dealt by rallied armies by 5%;\n> Increase building and research speed by 1.5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "france") {
      embed.setTitle("France");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546517213296/france-flag.png"
      );
      embed.setColor("#005EDD");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.JoanofArc1) +
          " / *Joan of Arc*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Throwing_Axeman) +
          " / *Throwing_Axeman*\n\n	__**Perks :**__\n> Increase troop health by 3%;\n> Increase wood gathering speed by 10%;\n> Increase Hospital healing speed by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "germany") {
      embed.setTitle("Germany");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362546798247956/germany-flag.png"
      );
      embed.setColor("#FFFFFF");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Hermann) +
          " / *Hermann*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Teutonic_Knightgerma) +
          " / *Teutonic_Knight*\n\n	__**Perks :**__\n> Increase cavalry attack by 5%;\n> Increase troop training speed by 5%;\n> Increase action point recovery by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "japan") {
      embed.setTitle("Japan");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362547045699644/japan-flag.png"
      );
      embed.setColor("#FFD6FB");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.KusunokiMasashige) +
          " / *Kusunoki Masashige*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Samurai) +
          " / *Samurai*\n\n	__**Perks :**__\n> Increase troop attack by 3%;\n> Increase scout march speed by 30%;\n> Increase resource gathering speed by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "korea") {
      embed.setTitle("Korea");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545095344339/korea-flag.png"
      );
      embed.setColor("#0B00B2");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.EuljiMundeok) +
          " / *Eulji Mundeok*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Hwarang) +
          " / *Hwarang*\n\n	__**Perks :**__\n> Increase archer defense by 5%;\n> Increase Hospital capacity by 15%;\n> Increase research speed by 3%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "rome") {
      embed.setTitle("Rome");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545640607844/rome-flag.png"
      );
      embed.setColor("#A101B1");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.ScipioAfricanus) +
          " / *Scipio Africanus*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Legionary) +
          " / *Legionary*\n\n	__**Perks :**__\n> Increase infantry defense by 5%;\n> Increase troop march speed by 5%;\n> Increase food gathering speed by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "ottoman") {
      embed.setTitle("Ottoman");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362545372184596/ottoman-flag.png"
      );
      embed.setColor("#CE0808");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.OsmanI) +
          " / *OsmanI*\n__**Special Units :**__ " +
          emoji(emo.Troop_Janissary) +
          " / *Janissary*\n\n	__**Perks :**__\n> Increase archer health by 5%;\n> Increase troop march speed by 5%;\n> Increase active skill damage by 5%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "spain") {
      embed.setTitle("Spain");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362433438793829/spain-flag.png"
      );
      embed.setColor("#A20B0B");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.Pelagius) +
          " / *OsmanI*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Conquistador) +
          " / *Conquistador*\n\n	__**Perks :**__\n> Increase cavalry defense by 5%;\n> Increase experience gained from barbarians and other neutral units by 10%;\n> Increase resource production by 20%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else if (com == "vikings") {
      embed.setTitle("Vikings");
      embed.setThumbnail(
        "https://cdn.discordapp.com/attachments/1069360006908084245/1069362432822231070/Viking-icon.png"
      );
      embed.setColor("#1FDBDB");
      embed.setDescription(
        "__**Starting Commander: **__ " +
          emoji(emo.bjornironside2) +
          " / *Bjorn Ironside*\n__**Special Units :**__ " +
          emoji(emo.Troop_Elite_Legionary) +
          " / *Berserker*\n\n	__**Perks :**__\n> Increase infantry attack by 5%;\n> Increase counterattack damage by 3%;\nIncrease troop load by 10%.\n"
      );
      return interaction.reply({ embeds: [embed] });
    } else {
      return interaction.reply("No commander found!");
    }
  },
};
