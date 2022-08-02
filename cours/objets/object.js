// Créer un objet (très proche du langage Json)

const article1 = {
    nom: "Macbook Pro 16 2021",
    fabricant: "Apple",
    prix: 3500,
    description: "Meilleur laptop du moment",
    quatiteStock: 670,
};
  
console.log(article1);
  
// Accéder aux attributs de cet objet (pas besoin de geteurs)

console.log("Nom  : ", article1.nom);
console.log("Fabricant  : ", article1.fabricant);
console.log("Prix  : ", article1.prix, "€");
  
// Modifier les attributs (pas besoin de seteurs)

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
  
// Changer le squelette du tableau avec la fonction .map() (formater)

const articles2 = articles.map(function (article) {
    return {
      id: article.id,
      designation: `${article.fabricant} ${article.nom}`,
      prix: `${article.prix} €`,
    };
});

console.log(articles2);

// Deconstruire avec la fonction .map()
// Pour aller chercher une variable d'un objet on utilise un écriture avec des acolades {variable}

const articles3 = articles.map(function ({ id, fabricant, nom, prix }) {
    return {
      id, // équivant à id: id (pas de changement)
      designation: `${fabricant} ${nom}`,
      prix: `${prix} €`,
    };
});

console.log(articles3);

// Créer un constructeur permettant de créer des objets
// Il n'y a pas besoin de faire référence à des geteurs et seteurs que l'on ne retrouve pas dans Javascript
// Quand on créer un nouvel objet avec ce constructeur, le "moteur" Javascript va automatiquement comprendre que l'on créer en premier 
// (dans cet exemple) une designation dont la valeur est celle renseignée en premier, puis un prixUHT dans la valeur est celle renseignée
// en deuxième etc.. De plus, le constructeur, après avoir "construit" l'objet va retourner l'objet crée

function Article(designation, prixUHT, description, urlImage) {
  this.designation = designation;
  this.prixUHT = prixUHT;
  this.description = description;
  this.urlImage = urlImage;
}

const article4 = Article(
  "Macbook Pro 16 2021",
  3500,
  "Mailleur laptop du moment",
  "http://..."
);

console.log(article4);

var variableTest = "test";

// Il existe un objet window dans Javascript (objet global qui permet d'intéragir avec tous les aspects de notre page) dont découle beaucoup
// de méthode : console.log() est en réalité window.console.log, de la même manière que alert() est en réalité window.alert()
// Quand je créer une variable de type var, cela la rajoute à l'objet window : je peux donc chercher à afficher cette variable en faisant
// console.log(variableTest) ou bien console.log(window.variableTest)
// Quand je créer un objet de la manière précédent (lignes 98-103) c'est une mauvaise pratique, car je créer un attribut dans l'objet global 
// window, le "this" dans le constructeur se rapportant au this de window
// Je peux donc l'afficher en faisant console.log(window.article1) et non pas console.log(article1) qui me renverra "undefined"
// Pour créer correctement un objet il faut rajouter "new" afin d'en faire un objet à part, permettant ainsi que le "this" dans le constructeur
// se rapporte à l'objet Article lui même

const article5 = new Article(
  "Macbook Pro 16 2021",
  3500,
  "Mailleur laptop du moment",
  "http://..."
);

console.log(article5);