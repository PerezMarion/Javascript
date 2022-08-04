// Importation de la fonction UserCard depuis le fichier user-card.js

import { UserCard } from "./components/user-card.js";

const usersCards = document.querySelector("#users");

// Utilisation de la fonction exportée pour chaque user récupéré dans la requête http 

axios.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
    const users = response.data;
    for (let user of users) {
      const card = UserCard(user);
      usersCards.appendChild(card);
    }
});