import { partyParrots } from "./partyparrot.js";

const listElement = document.querySelector("#list");

// Création de la carte : avec titre, image menant vers le lien de la page wikipédia correspondante
// Ajout de cette nouvelle carte créée à la liste d'éléments à afficher dans la page

export const createCard = (data) => {
  
    const cardMain = document.createElement("div");
    cardMain.classList.add("card");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card__title", "mt05");
    cardTitle.innerText = data.title;

    const cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    const randomGif = partyParrots[Math.floor(Math.random() * partyParrots.length)];
    cardImage.src = `./img/${randomGif}`;

    const pageId = data.pageid;
    const linkToWiki = document.createElement("a");
    linkToWiki.href = `http://en.wikipedia.org/?curid=${pageId}`;
    linkToWiki.append(cardImage);

    cardMain.append(cardTitle, linkToWiki);

  listElement.appendChild(cardMain);
};