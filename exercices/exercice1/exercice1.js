// Ecrire un programme Javascript qui demande à l’utilisateur d’entrer à partir du clavier deux variables
// Déclarer une variable qui est égale à la somme des deux variables
// Afficher un message d’alerte  « Bienvenue sur la page de formulaire »
// La console du navigateur affiche le contenu des variables
// L’alerte  affiche « Le résultat est » + le résultat du calcul


var n1 = prompt(`Veuillez entrer un premier nombre :`)
var n2 = prompt(`Veuillez entrer un deuxième nombre :`)

// On doit faire une "conversion" car depuis le prompt on récupère automatiquement un string
// Si l'utilisateur tape 1 et 2 comme nombre, 1 + 2 va faire une concaténation de string et on va obtenir 12
// Il faut donc convertir les strings obtenus en int parseInt() ou en float parseFloat() pour obtenir 1 + 2 = 3
var nombre1 = parseFloat(n1);
var nombre2 = parseFloat(n2);

var somme = nombre1 + nombre2;

alert(`Bienvenue sur la page de formulaire`)

console.log(` Nombre 1 : ${nombre1}, nombre 2 : ${nombre2}, somme des deux nombres : ${somme}`);
alert(`Le résultat est ${somme}`);