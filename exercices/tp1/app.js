import { partyParrots } from "./partyparrot.js";

const searchQuery = document.querySelector("#query");
const searchButton = document.querySelector("#searchbtn");
const listElement = document.querySelector("#list");

// On met sur écoute le bouton "Search" et quand on clique dessus on exécute la fonction

searchButton.addEventListener("click", function () {
    
    // Si une recherche est effectué, on efface tous les enfants liés à la liste d'éléments

    if (listElement.children.length > 0) {
        Array.from(listElement.children).forEach((child) => child.remove());
    }

    let url =`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchQuery.value}`;

    // On récupère les informations de l'API à l'adresse donnée et pour chaque données on crée une carte avec la fonction "createCard"
    // Puis on efface l'input (écriture dans le champs de recherche)
    
    axios.get(url).then((response) => {
        for (let data of response.data.query.search) {
            createCard(data);
        }
    });
    searchQuery.value = "";
});

// Création de la carte : avec titre, image menant vers le lien de la page wikipédia correspondante

const createCard = (data) => {
  
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