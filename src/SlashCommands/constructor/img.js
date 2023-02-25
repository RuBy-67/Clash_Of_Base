const { MessageEmbed, MessageAttachment } = require("discord.js");
const emo = require(`../../jsons/emoji.json`);
const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");

module.exports = {
  name: "img",
  description: "img test",
  options: null,
  run: async (client, interaction, args) => {
    function emoji(id) {
      return client.emojis.cache.get(id).toString();
    }

    const link = "";
    // fonction pour créer l'image à partir du lien
    async function createImage(link) {
      // extraire les informations sur les troupes et les sorts
      const [troupesStr, sortsStr] = link.split("-s");
      const troupes = troupesStr.split("-");
      const sorts = sortsStr.split("-");

      // charger l'image de fond
      const background = await loadImage(path.resolve(__dirname, "fond2.jpg"));

      // charger chaque image de troupe et de sort
      const images = await Promise.all(
        troupes.map(async (troupe) => {
          const [count, name] = troupe.split("x");
          const image = await loadImage(
            path.resolve(__dirname, `img/troupe/x${name}.png`)
          );
          return { image, count: parseInt(count) };
        })
      );
      const image2 = await Promise.all(
        sorts.map(async (sort) => {
          const [position, nom] = sort.split("x");
          const img = await loadImage(
            path.resolve(__dirname, `img/sort/x${nom}.png`)
          );
          return { img, position: parseInt(position) };
        })
      );

      // créer la nouvelle toile de dessin
      const canvas = createCanvas(background.width, background.height);
      const ctx = canvas.getContext("2d");

      // ajouter l'image de fond à la toile
      ctx.drawImage(background, 0, 0);

      // ajouter chaque image de troupe à la toile en fonction de la quantité spécifiée
      let x = 0;
      let y = 50;
      images.forEach(({ count, image }) => {
        ctx.drawImage(image, x, 0);
        ctx.font = "bold 55px Arial";
        ctx.fillStyle = "#fff"; // blanc
        ctx.textBaseline = "middle";
        ctx.fillText(count, x + image.width + 5, 0.5 * image.height);
        x += image.width + 50;
      });

      // ajouter chaque image de sort à la toile en fonction de la quantité spécifiée
      let a = 0;
      let b = 50;
      image2.forEach(({ position, img }) => {
        ctx.drawImage(img, a, 0);
        ctx.font = "bold 55px Arial";
        ctx.fillStyle = "#fff"; // blanc
        ctx.textBaseline = "middle";
        ctx.fillText(position, a + img.width + 5, 0.5 * img.height);
        a += img.width + 50;
      });

      // obtenir le buffer de l'image finale
      const buffer = canvas.toBuffer();

      return buffer;
    }

    // exemple d'utilisation
    createImage("4x1-2x28-8x83-7x15-s3x5-5x28-1x9-2x10").then((buffer) => {
      const attachment = new MessageAttachment(buffer, "image.png");
      const channel = client.channels.cache.get("1079166164514639882");

      // Envoi de l'image dans le channel
      channel
        .send({
          files: [
            {
              attachment: buffer,
              name: "image.png",
            },
          ],
        })
        .then((message) => {
          // Récupération du lien de l'image
          const imageUrl = message.attachments.first().url;
          console.log(imageUrl);

          // Utilisation de l'url de l'image dans l'embed
          const embed = new MessageEmbed()
            .setTitle("test")
            .setDescription("testounet")
            .addFields({ name: "test", value: "test" })
            .setColor("GREEN")
            .setThumbnail(
              "https://cdn.discordapp.com/attachments/1071792322896994360/1079057885478277191/RuBy_without_background_f1247f87-9d5d-4906-bf92-637324614e94.png"
            )
            .setImage(imageUrl)
            .setFooter({
              text: "test",
            })
            .setTimestamp(Date.now());

          return interaction.reply({ embeds: [embed] });
        })
        .catch(console.error);
    });
  },
};
