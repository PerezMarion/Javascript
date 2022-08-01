// On vous donne en argument un tableau d'entiers non négatifs
// Retournez le premier élément trouvé dans le tableau dont l'indice est égal à sa valeur

const tableauDepart = [5, 9, 11, 6, 1, 5, 24, 7, 2];

const indexEgalValeur = tableauDepart.find(function(entier) {
    return tableauDepart.indexOf(entier) === entier;
})

console.log(indexEgalValeur);