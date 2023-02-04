const { MessageEmbed } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);

module.exports = {
  name: "tips_skill",
  description: "Skills levels tips",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    const embed = new MessageEmbed()
      .setTitle("Tips Skill")
      .setDescription(
        "There are five main formations of skills that your commanders can take. In this part of the article we will elaborate on which commander should take which kind of formation. The formation options are `5/1/1/1`,`5/5/1/1`,`5/5/5/1`,`5/5/5/5`,`1/5/0/0`. This basically refers to the level at which your commander's skills should be maximized. 5 means five stars and 1 means one star.\n\n`5/1/1/1` **Skill distribution :**\n> " +
          emoji(emo.lubu1) +
          emoji(emo.Charlemagne) +
          emoji(emo.ElCid) +
          emoji(emo.CaoCao) +
          emoji(emo.FrederickI) +
          emoji(emo.guan) +
          emoji(emo.Tomyris) +
          "\n`5/5/1/1` **Skill distribution:**\n> " +
          emoji(emo.NebuchadnezzarII) +
          emoji(emo.Aethelflaed) +
          emoji(emo.ArtemisiaI11) +
          emoji(emo.CharlesMartel) +
          emoji(emo.YiSeongGye) +
          emoji(emo.ConstantineI) +
          emoji(emo.LeonidasI) +
          emoji(emo.cyrusthegreat) +
          emoji(emo.RichardI) +
          emoji(emo.MehmedII) +
          emoji(emo.JuliusCaesar) +
          emoji(emo.MinamotonoYoshitsune) +
          emoji(emo.moctezumai) +
          emoji(emo.xiangyu) +
          emoji(emo.mulan) +
          emoji(emo.Trajan) +
          "\n`5/5/5/1` **Skill distribution:**\n> " +
          emoji(emo.AlexandertheGreat) +
          emoji(emo.Saladin) +
          emoji(emo.RamessesII1) +
          emoji(emo.TakedaShingen) +
          emoji(emo.WilliamI) +
          "\n`5/5/5/5` **Skill distribution:**\n> " +
          emoji(emo.Attila) +
          emoji(emo.HaraldSigurdsson1) +
          emoji(emo.WuZetian) +
          emoji(emo.ChandraguptaMaurya1) +
          emoji(emo.GenghisKhan1) +
          emoji(emo.EdwardofWoodstock) +
          emoji(emo.HannibalBarca) +
          emoji(emo.Jadwiga) +
          emoji(emo.YiSunsin) +
          emoji(emo.Zenobia1) +
          emoji(emo.Theodora) +
          "\n`1/5/1/1` **Skill distribution:**\n> " +
          emoji(emo.CleopatraVII) +
          emoji(emo.IshidaMitsunari11) +
          emoji(emo.Seondeok1)
      )
      .setColor("GREEN")
      .setThumbnail(
        "https://media.discordapp.net/attachments/1057030746105200650/1057034989918761041/DALLE_2022-12-15_21.11.27_-_digital_art_of_pineaple_with_solar_glass.png?width=905&height=905"
      );

    return interaction.reply({ embeds: [embed] });
  },
};
