function calculSomme(nombre1, nombre2) {
    if(typeof nombre1 !== "number" || typeof nombre2 !== "number") {
        throw new Error("Veuillez entrer des nombres valides");
    }
    return nombre1 + nombre2;
}

// slugify("marion perez", "_") donne : marion_perez
function slugify(string, delimiter) {
    const lowerCaseString = string.toLowerCase();      // tout en minuscule
    const stringToArray = lowerCaseString.split(" ");  // transformation de la phrase en tableau avec un mot par cellule (coupure à chaque espace)
    return stringToArray.join(delimiter);              // transformation du tableau en phrase en mettant le délimiteur entre chaque mot
}

// Cette fonction va subir un hoisting, pour éviter ça on peut utiliser une "anonymous function"
// Elle n'a pas de nom mais se voit affecter une variable à la place

const slugifyV2 = function slugify(string, delimiter) {
    const lowerCaseString = string.toLowerCase();
    const stringToArray = lowerCaseString.split(" ");
    return stringToArray.join(delimiter);
}

// On peut aussi utiliser une "arrow function" 

const slugifyV3 = (string, delimiter) => {
    const lowerCaseString = string.toLowerCase();
    const stringToArray = lowerCaseString.split(" ");
    return stringToArray.join(delimiter);
}

// Ce type de fonction "arrow" est intéressante car si on ne doit pas faire de manipulation supplémentaire dans la fonction, on peut enlever
// le return et la création d'une variable et faire une retour automatique du résultat

const slugifyV4 = (string, delimiter) => string.toLowerCase().split(" ").join(delimiter);

// Le choix du type de fonction dépendra du choix de l'équipe : on choisira un style que l'on utilisera dans tout le code (uniformité)
// Mais attention car dans le cas d'une "arrow function" lorsque l'on utilise à l'intérieur un this.attribut cela ne fonctionne pas comme avec
// les autres types de fonction : avec le this elle ne se réfère pas à un attribut intérieur à la fonction (elle n'ont pas leur propre référence
// de this car elle vont complètement ignorer le contexte) mais va chercher l'attribut à l'extérieur dans l'objet global qu'est window 
// (informations dans le dossier objets)

var equipe = ["Messi", "Et'o", "Thierry Henry", "Iniesta", "Xavi", "Busquet"];

function afficherEquipe() {
  this.equipe.forEach((joueur) => {
    console.log(joueur);
  });
}

var real = {
  equipe: ["C.Ronaldo", "Benzema", "Modric", "Ramos", "Casillas"],
  
  getEquipe: function () {      // this.equipe retourne l'équipe de l'objet real car elle récupère le contexte
    return this.equipe;
  },

  getEquipe2: () => {           // this.equipe retourne l'équipe générale (de l'objet window) car l'arrow function ignore le contexte
    return this.equipe;
  },

  getEquipe3: function () {     // this.equipe de la fonction efficherEquipe se trouve dans l'objet window donc elle récupère le contexte
    afficherEquipe();           // et retourne l'équipe générale même si la fonction getEquipe3 qui l'utilise se trouve dans l'objet real
  },
};

// Ce type de fonction "rest parametre" permet de représenter un nombre indéfini d'arguments sous forme d'un tableau
// Si le dernier paramètre nommé fourni à la fonction est préfixé de ..., il devient un tableau dont les éléments entre 
// 0 (inclus) et la taille du tableau (exclus) sont fournis comme autres arguments à la fonction
// S'il n'y a qu'un seul argument, la valeur sera un tableau à une cellule

const somme = (...nombres) => {
    let resultat = 0;
    
    for (let nombre of nombres) {
      resultat = resultat + nombre;
    }
    return resultat;

    // Cela équivaut à : 
    // for(let i = 0; i < nombres.lenght; i = i + 1 ) {
        // resultat = resultat + nombres[i];
    // }
    // return resultat;
}

// Donc si j'utilise const somme = (1, 2, 3, 4, 5); cela renvera 15 (1+2+3+4+5)

// Pour finir il existe les functions avec paramètre par défaut (ici le nombre de paramètres et leur valeur est fixée)

const somme2 = (nombre1 = 0, nombre2 = 0) => nombre1 + nombre2;