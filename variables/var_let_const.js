console.log("1. Nom : " + nom);
var nom = "Marion";
console.log("2. Nom : " + nom);

// Ce programme planterait dans Java car la console ne pourrait pas trouver la variable nom dans un premier temps qui n'est pas encore déclaré,
// Alors le programme serait stoppé et on ne passerait pas à la suite
// Pourtant ici dans Javascript, la console affiche dans un premier temps que le nom n'est pas défini, puis il continue et  après définition
// de la variable il affiche bien "Marion"
// Cela est possible car le "moteur" Javascript va créer une enveloppe contenant tous le code pour s'assurer que les normes du langage sont 
// respectés, avant d'exécuter le code. Cette étape réserve automatiquement de l'espace en mémoire pour toutes les variables déclarées comme
// "var" et va leur assigner la valeur "undefined" (c'est ce que l'on appelle le hoisting)

// Mais cela peu poser problème :
// Variable globale (accès à a=6 même en dehors de la boucle ce que l'on ne veut pas)

if(true) {
    var a = 6;
    console.log("'a' dans 'IF'", a);
}
console.log("'a' après 'IF'", a);

// Contrairement au mot clé "var", le mot clé let est dit block scoped, c'est à dire que la variable n'est accessible que dans le bloc dans 
// lequel elle est définie. Un bloc c'est ce qui se trouve entre { et }, c'est le cas des boucles, du if mais aussi des fonctions. 
// Let ne subit pas de hoisting ce qui en fait une variable locale (dans les deux cas suivant cela lève une erreur)

console.log("1. Nom : " + nom2);
let nom2 = "Marion";
console.log("2. Nom : " + nom2);

if(true) {
    let b = 6;
    console.log("'b' dans 'IF'", b);
}
console.log("'b' après 'IF'", b);

// Il n'est donc plus recommandé d'utiliser les variables de type "var"

// Il existe ussi le mot clé "const" qui est l'équivalent d'une variable en "final" dans Java. On l'utilise lorsque la valeur de la variable
// ne changera jamais. On ne pourra donc plus la changer même si on essaye dans la suite du code car cela lèverait une erreur.

const API_BASE_URL = "http://api.contacts.com";
API_BASE_URL = "changement";