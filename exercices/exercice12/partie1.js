// Générer les couleurs à partir d'une plage fournie `["green", "red", "rgba(133,122,200)", "#F15025"]`

const colorList = ["green", "red", "rgba(133,122,200)", "#F15025"];

const container = document.querySelector("#container");
const btn = document.querySelector("#bouton");

btn.addEventListener("click", function () {

    let changeColor = colorList[0]
    colorList.unshift(colorList.pop());
    container.style.backgroundColor = changeColor;
    
})