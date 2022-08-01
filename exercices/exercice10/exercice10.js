// On vous donne une chaîne de caractères et un nombre entier K comme arguments
// Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères
// Retournez le tableau résultant
// La chaîne en argument sera toujours d'au moins K caractères

const tableauCaractere = (phrase, entier) => {
    let tableau = [];
    let index = 0;
    while(phrase.length >= entier) {
        let caracteres = phrase.substr(index, entier);
        index = index + entier;
        tableau.push(caracteres);
    }
    tableau.push(phrase.substr(index))
    return tableau;
}

const phrase = "Accidentellement nous nous blessâmes";
const entier = 4;

// console.log(tableauCaractere(phrase, entier));