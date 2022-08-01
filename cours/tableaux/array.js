// Créer un tableau vide et créer avec initialisation un autre tableau

const fruits = [];

const noms = ["Marion", "Ludo", "Thomas", "Valentin", "Anouar"];

// Insérer des données dans les tableaux
// On peut insérer des données dans les tableaux malgré que ce soit des "const" car le tableau étant un objet "complexe" c'est sa référence
// qui ne peut être modifié, en revanche son contenu peut l'être

fruits.push("Pomme");
fruits.push("Fraise");

noms.push("Christian");  

console.log(fruits);     // la taille du tableau est de 2
console.log(noms);       // la taille du tableau est de 6

// .push(element) retourne la nouvelle taille du tableau après insertion

// Accéder à une cellule du tableau

console.log(noms[3]);    // retourne "Valentin"
console.log(fruits[1])   // retourne "Fraise"

// Retirer un élément à la fin du tableau

noms.pop();

console.log(noms);       // "Christian" n'apparait plus dans le tableau noms, la taille du tableau est de 5

// Retirer un élément au début du tableau

fruits.shift();

console.log(fruits);    // "Pomme" n'apparait plus dans le tableau fruits et les indexs ont été remanié, la taille du tableau est de 1

// Insérer un élément au début du tableau

noms.unshift("Alexandre");

console.log(noms);       // "Alexandre" apparait au début du tableau fruits et les indexs ont été remanié, la taille du tableau est de 6

// .unshift(element) et .shift() induisent un recalcul de tous les indexs ce qui peut poser un problème de performance quand on
// travaille sur une très grande collection, contrairement à .push(element) et .pop()
// Pour évaluer ces performances, on ne peut pas le faire sur une machine en particulier car selon le matériel et l'environnement on n'aura
// pas le même résultat. On utilise donc une grandeur O(n) qui est indépendante de l'environnement mais se base sur le nombre d'opérations
// effectuées.
// Pour les fonctions .push(element) et .pop() on est sur un runtime de O(1) car cela ne va effectuer qu'une seule opération
// Pour les fonctions .unshift(element) et .shift() on est sur un runtime de O(n), n étant la longueur du tableau
// Par exemple si j'ai un tableau de 2 éléments (oui, non) et que j'ajoute un élément en début de liste j'aurais un runtime de O(3) car :
// opér1 : insérer l'élement avec un index de 0, opé2 : passer l'index de "oui" de 0 à 1, opé3 : passer l'index de "non" de 1 à 2

// Application du runtime à une fonction

function sommeDiagonaleMatriceCarrée(matrice) {
    let somme=0;
    for(let i = 0; i < matrice.lenght; i = i+1) {
        for(let j = 0; j < matrice.lenght; j = j+1) {
            if(i === j) {
                somme = somme + matrice[i][j];
            }
        }
    }
    return somme;
}

// Ici on a un runtime de O(n²) : sur une matrice de taille n= 3 (3*3) on va devoir faire 9 boucles pour parcourir tous les éléments
// de la matrice et vérifier si l'index de la ligne est égal à celui de la colonne donc O(3²) ou O(9)

function sommeDiagonaleMatriceCarrée2(matrice) {
    let somme = 0;
    for (let i = 0; i < matrice.length; i++) {
      somme += matrice[i][i];
    }
  
    return somme;
}

// Ici on  un runtime de O(n) : sur une matrice de taille n=3 (3*3) on va devoir faire 3 boucles pour parcourir toutes les lignes
// de la matrice et prendre uniquement l'élément donc l'index de la colonne est le même que celui de la ligne donc O(3)