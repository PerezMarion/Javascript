// Avoir un tableau des users dont l'age varie entre 20-40 ans
// Recuprerer le user dont noms est Pierre Zozor
// Recuperer un tableau ne contenant que les noms des utilisateurs

const users = [
    { noms: 'Jojo Jack', age: 21 },
    { noms: 'Paul-Jules', age: 45 },
    { noms: 'Pierre Zozor', age: 67 },
    { noms: 'Gilbert Toto', age: 39 },
    { noms: 'Simon Pierre', age: 35 },
    { noms: 'Andres Iniesta', age: 70 }
];

const tableauAge = users.filter(function (user) {
    return user.age >= 20 && user.age <= 40;
})

console.log(tableauAge);

const findPierre = users.find(function (user) {
    return user.noms === 'Pierre Zozor';
})

console.log(findPierre);

const tableauNoms = users.map(function ({noms}) {
    return noms;
})

console.log(tableauNoms);