// Ecrire un programme Javascript qui demande l’âge d’un enfant. Ensuite, il l’informe de sa catégorie :
// « Poussin » de 7 à 9 ans
// « Pupille » de 10 à 11 ans
// « Benjamin » de 12 à 13 ans
// « Minime » de 14 à 15 ans
// « Cadet » 16 à 17 ans

const age = prompt(`Veuillez entrer votre âge (en années) : `);

if(age < 7) {
    alert('Vous êtes trop jeune');
} else if(age >= 7 && age <= 9) {
    alert('Vous êtes un poussin');
} else if(age >= 10 && age <= 11) {
    alert('Vous êtes une pupille');
} else if(age >= 12 && age <= 13) {
    alert('Vous êtes un benjamin');
} else if(age >= 14 && age <= 15) {
    alert('Vous êtes un minime');
} else if(age >= 16 && age <= 17) {
    alert('Vous êtes un cadet');
} else if(age > 17){
    alert('Vous êtes trop grand');
} else {
    alert('Veuillez entrer un âge valide')
}