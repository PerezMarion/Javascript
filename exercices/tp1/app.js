import { createCard } from "./components.js";

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
    // qui est une fonction importée du fichier components.js
    // Puis on efface l'input (écriture dans le champs de recherche)
    
    axios.get(url).then((response) => {
        for (let data of response.data.query.search) {
            createCard(data);
        }
    });
    searchQuery.value = "";
});