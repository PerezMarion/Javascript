// Faire en sorte que lorsqu'on clique sur le bouton ajouter, cela ajouter un élément de la liste elementsToAdd à la liste existente dans
// le html et que lorsque l'on clique sur le bouton vider, cela enleve toute la liste

let elementsToAdd = [
    "Valentin HTLM",
    "Reactjs & Redux",
    "React Query",
    "Redux Saga",
    "Redux ToolKit",
    "Svelte",
    " Vue.js",
    "Angular",
];
  
// Liste des elements avec id = #liste
  
const liste = document.querySelector("#liste");
  
// Bouton ajouter avec class = .ajouter
  
const ajouter = document.querySelector(".ajouter");
let counter = 0;
  
ajouter.addEventListener("click", function () {
if (counter < elementsToAdd.length) {
    liste.innerHTML += `<li>${elementsToAdd[counter]}</li>`;
    counter++;
}
return;
});
  
// Bouton vider avec class = .vider
  
const vider = document.querySelector(".vider");
  
vider.addEventListener("click", function(){
    liste.innerHTML = "";
    counter = 0;
})