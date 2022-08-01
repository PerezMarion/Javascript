// On vous donne un tableau d'entiers et un entier K comme arguments
// Retournez un nouveau tableau contenant uniquement les entiers qui sont à K éléments de la fin du tableau
// Supposez que le tableau d'arguments aura toujours une taille d'au moins K entiers

const nombresGardes = (nombres, entierSeuil) => {
    tableauNombresGardes = [];
    for( let i = nombres.length - entierSeuil; i < nombres.length; i++) {
        tableauNombresGardes.push(nombres[i]);
    }
    return tableauNombresGardes;
}

const tableauDepart = [5, 8, 12, 6, 37, -4, 0];
const entier = 3;

console.log(nombresGardes(tableauDepart, entier));

// ou

const nombresGardes2 = (nombres, entierSeuil) => {
    const longueurTableau = nombres.length;
    for(let i = 0; i < longueurTableau - entierSeuil; i++) {
        nombres.shift();
    }
    return nombres;
}

console.log(nombresGardes2(tableauDepart, entier));