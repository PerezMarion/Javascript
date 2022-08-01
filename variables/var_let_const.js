console.log("1. Nom : " + nom);
var nom = "Marion";
console.log("2. Nom : " + nom);

// Ce programme planterait dans Java car la console ne pourrait pas trouver la variable nom dans un premier temps qui n'est pas encore déclaré,
// Alors le programme serait stoppé et on ne passerait pas à la suite
// Pourtant ici dans Javascript, la console affiche dans un premier temps que le nom n'est pas défini, puis il continue et  après définition
// de la variable il affiche bien "Marion"
// Cela est possible car le "moteur" Javascript va créer une enveloppe contenant tous le code pour s'assurer que les normes du langage sont 
// respectés, avant d'exécuter le code. Cette étape réserve automatiquement de l'espace en mémoire pour toutes les variables déclarées comme
// "var" et va leur assigner la valeur "undefined"