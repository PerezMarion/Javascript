// Créer un objet (très proche du langage Json) et l'afficher dans la console

const article1 = {
    nom: "Macbook Pro 16 2021",
    fabricant: "Apple",
    prix: 3500,
    description: "Meilleur laptop du moment",
    quatiteStock: 670,
};
  
console.log(article1);
  
// Accéder aux attributs

console.log("Nom  : ", article1.nom);
console.log("Fabricant  : ", article1.fabricant);
console.log("Prix  : ", article1.prix, "€");
  
// Modifier les attributs

article1.nom = "Macbook Pro 13 2020 M1";
  
// Créer et instencier un tableau d'objets
  
const articles = [
    {
      id: 1,
      nom: "Macbook Pro 16 2021",
      fabricant: "Apple",
      prix: 3500,
      description: "Meilleur laptop du moment",
      quatiteStock: 670,
    },
    {
      id: 2,
      nom: "Asus Rog",
      fabricant: "Asus",
      prix: 4000,
      description: "Meilleur laptop pour les graphistes",
      quatiteStock: 45,
    },
    {
      id: 3,
      nom: "Iphone 13 Pro Max",
      fabricant: "Apple",
      prix: 1600,
      description: "sdfdklf",
      quatiteStock: 5,
    },
];
  
console.log("Liste des articles :\n");
for (let article of articles) {
    console.log("Nom  : ", article.nom);
    console.log("Fabricant  : ", article.fabricant);
    console.log("Prix  : ", article.prix, "€");
    console.log("\n");
}
  
// Changer le squelette du tableau avec la fonction .map()

const articles2 = articles.map(function (article) {
    return {
      id: article.id,
      designation: `${article.fabricant} ${article.nom}`,
      prix: `${article.prix} €`,
    };
});

console.log(articles2);

// Destructuration avec la fonction .map()

const articles3 = articles.map(function ({ id, fabricant, nom, prix }) {
    return {
      id, // équivant à id: id (pas de changement)
      designation: `${fabricant} ${nom}`,
      prix: `${prix} €`,
    };
});