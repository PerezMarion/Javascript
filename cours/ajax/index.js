const usersList = document.querySelector("#users");

function CreateUserItem(user) {
  const userItem = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.innerText = user.name;
  itemLink.href = `./details.html?id=${user.id}`;
  userItem.appendChild(itemLink);
  return userItem;
}

// On appelle l'objet axios (importé depuis le fichier.html) pour faire une requête http GET à l'API
// Notion de promesse : l'objet nous fait la promesse de nous retourner ces données mais il y a un temps d'attente avant que l'on sache
// s'il a pu la réaliser ou pas (mais on part du principe qu'il va la réaliser)
// Dans un deuxième temps, une fois que les données sont récupérées on lui demande d'exécuter une fonction pour exploiter ces données

axios.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
  const users = response.data;
  for (let user of users) {
    usersList.appendChild(CreateUserItem(user));
  }
});

// Ici on a crée une variable userList qui vient récupérer la liste d'id "users" du fichier.html
// Et on crée une fonction permettant de créer une ligne "li" contenant le nom du user et l'url permettant d'accéder aux détails
// concernant cet user (toujours le même début d'url mais avec un paramètre particulier qu'est l'id de l'user dans l'uri)
// Quand on utilise l'objet axios, on va donc lui demander dans un deuxième temps d'éxécuter cette fonction pour chaque réponse obtenue dans la
// requête http (chaque user) et pour chacun d'entre eux, de l'ajouter à la liste d'users qu'on a créer au début
// On pourra donc utiliser cette liste pour afficher les informations obtenues depuis l'API, et ce dans notre page