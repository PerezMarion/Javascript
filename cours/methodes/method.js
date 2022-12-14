// Ecrire un code qui permet de mettre au pluriel les noms de fruits dans un tableau

const fruits = ["Pomme", "Poire", "Pêche", "Fraise", "Pastèque"]

// Boucle for classique
// Création manuelle d'un nouveau tableau vide
// Pour l'index allant de 0 à l'index maximal du premier tableau :
// ajouter au nouveau tableau en index 0, l'élément de la cellule d'index 0 du premier tableau et lui ajouter "s", puis index 1...

const fruitsPluriels = [];

for(let i = 0; i < fruits.length; i = i+1) {
    fruitsPluriels.push(fruits[i] + "s");
}

console.log(fruitsPluriels);

// Boucle for of
// Création manuelle d'un nouveau tableau vide
// Pour le tableau fruits dont on appelle chaque élément un fruit :
// ajouter au nouveau tableau en index 0, le premier fruit et ajouter "s" , puis en index 1, le second fruits et ajouter "s"...

const fruitsPluriels2 = [];

for(let fruit of fruits) {
    fruitsPluriels2.push(fruit + "s");
}

console.log(fruitsPluriels2);

// Boucle for each
// Création manuelle d'un nouveau tableau vide
// Pour chaque élément "fruit" du tableau "fruits" :
// ajouter au nouveau tableau en index 0, le premier fruit et ajouter "s" , puis en index 1, le second fruits et ajouter "s"...

const fruitsPluriels3 = [];

fruits.forEach(function (fruit) {
  fruitsPluriels3.push(fruit + "s");
});

console.log(fruitsPluriels3);

// Ces trois méthodes sont utilisables et donnent finalement la même chose au final
// Mais ce n'est pas idéal car on va dans les trois cas, créer manuellement un nouveau tableau que l'on rempli par itération à partir du premier
// On va donc utiliser une nouvelle méthode

// Méthode .map()

const fruitsPlurielsMap = fruits.map(function (fruit) {
    return fruit + "s";
});

console.log(fruitsPlurielsMap);

// Création automatique d'un tableau en mémoire
// Pour chaque élément "fruit" du tableau "fruits" ajouter "s" et ajouter la valeur retournée dans le tableau en mémoire
// A la fin de la boucle, la variable "fruitsPlurielsMap" reçoit en totalité le tableau en mémoire
// C'est intéressant car on ajoute toutes les cellules du tableau en une fois et pas cellule par cellule
// Cependant, le nouveau tableau créé automatiquement aura toujours la même taille que le précédent
// on utilise donc .map() quand on veut formater notre tableau et obtenir un nouveau tableau de même taille (pas avec if dedans par exemple)

// Mauvaise utilisation de .map()

const nombres =  [2, 5, 67, 8, 56, 19, 33];

const nombresSup20Bad = nombres.map(function (nombre) {
    if(nombre >= 20) {
        return nombre;
    }
})

console.log(nombresSup20Bad);

// On se retrouve avec des cellules contenant "undefined" car les nombres ne remplissant pas la condition n'ont pas été ajouté, mais
// le nouveau tableau fait toujours la même taille que le premier
// Pour éviter cela on utilise la méthode filter qui va adapter la taille finale du tableau en fonction des nombres qui remplissent la condition

const nombresSup20Good = nombres.filter(function (nombre) {
    return nombre >= 20;
})

console.log(nombresSup20Good);

// .map() et .filter() retournent toujours un tableau
// Dans le cas de .filter() si un seul élément rempli la condition émise, cela retournera un tableau d'un seul élément, et si aucun élément
// ne la rempli, ça retournera un tableau vide

// La fonction .find(element) retourne quand a elle un seul élément (pas un tableau) trouvé après recherche dans tableau
// Si la recherche satisfait plusieurs éléments du tableau dans lequel on l'effectue, c'est seulement la première occurence qui sera retournée

const noms = [
  "Jordan Prevot",
  "Mickael Veril",
  "Nouah Menadjlia",
  "Christian Lisangola",
  "Steven Dumortier",
  "Valentin Payet",
  "Mansour Achour",
  "Christian Lasangala",
];
  
const nom = noms.find(function (nom) {
  return nom.startsWith("Chris");
});

console.log(nom);    // Ne retourne que "Christian Lisangola" et pas "Christian Lasangala"

// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste afin de la réduire 
// à une seule valeur. La valeur précédemment retournée par le dernier appel, ou valeur initiale fournie si c'est le début, est stockée
// dans l'accumulateur car c'est une valeur « accumulée » au fur et à mesure des appels

somme = 0;
somme = nombres.reduce(function (accumulateur, nombre) {
  return accumulateur + nombre;
}, 0);
console.log("Somme reduce : ", somme)  