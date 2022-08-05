// Importation de la fonction UserCard depuis le fichier user-card.js et du service UsersService depuis le fhicher users-service.js

import { UserCard } from "./components/user-card.js";
import { UsersService } from "./services/users-service.js"

class HomePage {

  // On utilise un $ devant usersCards car il s'agit d'un objet de l'interface utilisateur (du DOM)

  constructor() {
    this.$usersCards = document.querySelector("#users");
    this.usersService = new UsersService();
    this.users = [];
  }

  // this.users qui était un tableau vide va récupérer toutes les données recherchées avec l'axios sur l'API
  // grace à "async" et "await" la fonction va attendre que cette requête http soit satisfaite (promesse résolue) avant de passer à
  // la suite et de parcourir chaque user récupérés pour lui affecter une carte

  async main() {
    this.users = await this.usersService.fetchUsers();
    for (let user of this.users) {
      const card = UserCard(user);
      this.$usersCards.appendChild(card);
    }
  }
}

const homePage = new HomePage();
homePage.main;