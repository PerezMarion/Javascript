// Avec Java, on doit faire une spécification de type à la déclaration d'une variable (String nom="Jean";)
// On ne peut ensuite plus changer le type de la variable (impossible de mettre nom=35;) : c'est un typage statique
// Javascript possède à l'inverse un typage dynamique

// 1. Déclaration avec var

// a) Somme
var nombre1 = 45;
var nombre2 = 55;
var somme = nombre1 + nombre2;

// console.log(); pour afficher dans la console d'inspection sur la page web
console.log(somme);
console.log(`${nombre1} + ${nombre2} = ${somme}`);

// b) Identité sans prompt
var prenom = "Marion";
var nom = "Perez";
var age = 25;

console.log(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);

// c) Identité avec prompt
var prenom = prompt("Votre prenom : ");
var nom = prompt("Votre nom : ");
var age = prompt ("Votre age : ");

// alert(); pour afficher directement sur la page web en fenêtre pop-up
alert(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);