// Générer les couleurs avec la notation hexadécimale `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]`


// ----------------- On pensait dans un premier temps qu'il fallait forcément une couleur de la forme #ABC123 ----------------------- //


// const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const hexNumbers = hexaList.splice(0,10);
// const hexLetters = hexaList;

// const random = function(table){
//     let max = table.length; 
//     let index = Math.floor(Math.random() * max);
//     return table[index];
// }

// const letterLen = hexLetters.length;
// const numberLen = hexNumbers.length;

// const text = document.querySelector("#texte");
// const btn = document.querySelector("#bouton");
// const bgColor = document.querySelector("#bgColor");

// btn.addEventListener("click", function () {

//     let l1 = random(hexLetters);
//     let l2 = random(hexLetters);
//     let l3 = random(hexLetters);

//     let n1 = random(hexNumbers);
//     let n2 = random(hexNumbers);
//     let n3 = random(hexNumbers);

//     changeColor = `#${l1}${l2}${l3}${n1}${n2}${n3}`
//     bgColor.innerText = "Background color: " + changeColor;

//     text.style.backgroundColor = changeColor;
// })


// -------------------- En voulant le faire autrement je me suis trompée et je l'ai fait sous la forme #123ABC ----------------------- //


// const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// const randomInt = function(table){
//     const min = 0;
//     const max = 9;
//     let index = Math.floor(Math.random() * (max - min) + min);
//     return table[index];
// }

// const randomLetter = function(table){
//     const min = 10;
//     const max = 15;
//     let index = Math.floor(Math.random() * (max - min) + min);
//     return table[index];
// }

// const text = document.querySelector("#texte");
// const btn = document.querySelector("#bouton");
// const bgColor = document.querySelector("#bgColor");

// btn.addEventListener("click", function () {

//     let l1 = randomInt(hexaList);
//     let l2 = randomInt(hexaList);
//     let l3 = randomInt(hexaList);

//     let n1 = randomLetter(hexaList);
//     let n2 = randomLetter(hexaList);
//     let n3 = randomLetter(hexaList);

//     changeColor = `#${l1}${l2}${l3}${n1}${n2}${n3}`
//     bgColor.innerText = "Background color: " + changeColor;

//     text.style.backgroundColor = changeColor;
// })


// ----------------- Ca fonctionnait quand même donc en fait il n'y avait pas besoin de selection dans la tableau ----------------------- //


const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const getRandomIndex = function(table){
    const max = table.length; 
    const index = Math.floor(Math.random() * max);
    return table[index];
}

const container = document.querySelector("#container");
const btn = document.querySelector("#bouton");
const bgColor = document.querySelector("#bgColor");

btn.addEventListener("click", function () {

    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += getRandomIndex(hexaList);
    }

    bgColor.innerText = "Background color: " + hexColor;

    container.style.backgroundColor = hexColor;
})