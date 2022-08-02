// On vous donne une chaîne de caractères et un nombre entier K comme arguments
// Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères
// Retournez le tableau résultant
// La chaîne en argument sera toujours d'au moins K caractères

const couperPhrase = (phrase, entier) => {
    const tableau = [];
    for(let i = 0; i <= phrase.length - 1 ; i = i + entier) {
        tableau.push(phrase.slice(i, i + entier))
    }
    return tableau;
}

const phrase = "Accidentellement nous nous blessâmes";
const entier = 4;

console.log(couperPhrase(phrase, entier));