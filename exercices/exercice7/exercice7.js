// 1 - Trouver le nombre d'algeriens dans notre collection
// 2 - Trouver toutes les personnes dont les prenoms se terminent par a
// 3 - Avoir la liste de tous les noms
// 4 - La liste de tous les hommes russes
// 5 - La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes
// 6 - La liste de tous les hommes dont les noms commencent par M

const users = [
    {
      id: 1,
      sexe: 'M',
      nom: 'Lisangola',
      prenom: 'Bondjali',
      nationalite: 'Allemande'
    },
    {
      id: 2,
      sexe: 'M',
      nom: 'Alain',
      prenom: 'Stanislas',
      nationalite: 'Bresilienne'
    },
    { id: 3, 
      sexe: 'M', 
      nom: 'Kavov', 
      prenom: 'Joseph', 
      nationalite: 'Russe' },
    {
      id: 4,
      sexe: 'M',
      nom: 'Jean',
      prenom: 'Jonathan',
      nationalite: 'Francaise'
    },
    {
      id: 5,
      sexe: 'F',
      nom: 'Lisangola',
      prenom: 'Alain',
      nationalite: 'Italienne'
    },
    {
      id: 6,
      sexe: 'F',
      nom: 'Sakura',
      prenom: 'Josephine',
      nationalite: 'Bresilienne'
    },
    { id: 7, 
      sexe: 'M', 
      nom: 'Le Blanc', 
      prenom: 'Axel', 
      nationalite: 'Italienne' },
    {
      id: 8,
      sexe: 'M',
      nom: 'Alison',
      prenom: 'Murdoch',
      nationalite: 'Somalienne'
    },
    { id: 9, 
      sexe: 'F', 
      nom: 'Zarosky', 
      prenom: 'Semia', 
      nationalite: 'Russe' },
    {
      id: 10,
      sexe: 'F',
      nom: 'Ali',
      prenom: 'Laurene',
      nationalite: 'Algerienne'
    }
];

const tableauAlgeriens = users.filter(function (user) {
    return user.nationalite.startsWith('Alger');
}).length

console.log(tableauAlgeriens);

const tableauNomA = users.filter(function (user) {
    return user.prenom.endsWith('a');
})

console.log(tableauNomA);

const tableauNoms = users.map(function ({nom}) {
    return nom;
})

console.log(tableauNoms);

const tableauHommesRusses = users.filter(function (user) {
    return user.sexe === 'M' && user.nationalite === 'Russe';
})

console.log(tableauHommesRusses);

const tableauFemmesK = users.filter(function (user) {
    return user.sexe === 'F' && user.nom.startsWith('K');
})

console.log(tableauFemmesK);

const tableauHommesM = users.filter(function (user) {
    return user.sexe === 'M' && user.nom.startsWith('M');
})

console.log(tableauHommesM);