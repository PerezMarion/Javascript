// Création d'un tableau vide et création et initialisation d'un autre tableau

const fruits = [];

const noms = ["Marion", "Ludo", "Thomas", "Valentin", "Anouar"];

// Insertion des données dans les tableaux

fruits.push("Pomme");
fruits.push("Fraise");

noms.push("Christian");

console.log(fruits);
console.log(noms);

// On peut insérer des données dans les tableaux malgré que ce soit des "const" car le tableau étant un objet "complexe" c'est ça référence
// qui ne peut être modifié, en revanche son contenu peut l'être