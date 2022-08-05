import { UsersList } from "./components/users-list/users-list.js";
import { UsersService } from "./services/users-service.js"

class HomePage {

  // On utilise un $ devant usersCards car il s'agit d'un objet de l'interface utilisateur (du DOM)

  constructor() {
    this.usersService = new UsersService();
    this.users = [];
  }

  // this.users qui était un tableau vide va récupérer toutes les données recherchées avec l'axios sur l'API
  // grace à "async" et "await" la fonction va attendre que cette requête http soit satisfaite (promesse résolue) avant de passer à
  // la suite et de parcourir chaque user récupérés pour lui affecter une carte comme le fait la fonction importé UsersList

  async main() {
    this.users = await this.usersService.fetchUsers();
    const usersList = new UsersList(this.users);
    usersList.render();
  }
}

const homePage = new HomePage();
homePage.main();