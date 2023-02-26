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
      const background = await loadImage(
        path.resolve(__dirname, "img/fond2.jpg")
      );

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

      // calculer la largeur disponible pour les troupes
      const troupeWidth = canvas.width - 50 - image2[0].img.width;

      // ajouter chaque image de troupe à la toile en fonction de la quantité spécifiée
      let x = 0;
      let y = 50;
      let maxRowHeight = 0;
      images.forEach(({ count, image }) => {
        let width = image.width;
        let height = image.height;

        // vérifier si l'image dépasse du cadre
        if (x + width > troupeWidth) {
          // réduire la largeur de l'image pour qu'elle rentre dans le cadre
          width = troupeWidth - x;

          // ajuster la hauteur en conséquence
          height = (width / image.width) * image.height;
        }

        // vérifier si l'image dépasse du cadre
        if (x < 0) {
          // réduire la largeur de l'image pour qu'elle rentre dans le cadre
          width += x;
          x = 0;
        }
        if (x + width > canvas.width - image2[0].img.width) {
          width = canvas.width - image2[0].img.width - x;
        }
        if (y + height > canvas.height) {
          height = canvas.height - y;
        }

        ctx.drawImage(image, x, y, width, height);
        ctx.font = "bold 55px Arial";
        ctx.fillStyle = "#fff"; // blanc
        ctx.textBaseline = "middle";
        ctx.fillText(count, x + width + 5, y + 0.5 * height);

        // vérifier si l'image est la plus haute de la ligne
        if (height > maxRowHeight) {
          maxRowHeight = height;
        }

        // avancer vers la droite pour la prochaine image
        x += width + 50;

        // si l'image dépasse du cadre, passer à la ligne suivante
        if (x + width > troupeWidth) {
          x = 0;
          y += maxRowHeight + 50; // ajouter un espacement vertical de 50px
          maxRowHeight = 0; // réinitialiser la hauteur maximale de la ligne
        }
      });
      // calculer la hauteur disponible pour chaque image de sort
      const sortHeight = (canvas.height - 100) / image2.length;

      // ajouter chaque image de sort à la toile en fonction de la quantité spécifiée
      let a = canvas.width - 50;
      let b = 50;
      image2.forEach(({ position, img }) => {
        let width = (img.width * sortHeight) / img.height;
        let height = sortHeight;

        // vérifier si l'image dépasse du cadre
        if (b < 0) {
          height += b;
          b = 0;
        }
        if (b + height > canvas.height) {
          height = canvas.height - b;
        }

        ctx.drawImage(img, a - width, b, width, height);
        ctx.font = "bold 55px Arial";
        ctx.fillStyle = "#fff"; // blanc
        ctx.textBaseline = "middle";

        // écrire le nombre de sort à côté de l'image
        ctx.fillText(position, a - width - 50, b + 0.5 * height);

        // avancer vers le bas pour la prochaine image
        b += height + 1;
      });
      // obtenir le buffer de l'image finale
      const buffer = canvas.toBuffer();

      return buffer;
    }

    createImage(
      "4x1-2x28-8x83-7x15-8x0-3x5-2x7-2x11-7x59-8x87-2x2-3x9-s3x5-5x28-1x9-2x10-1x35"
    ).then((buffer) => {
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
