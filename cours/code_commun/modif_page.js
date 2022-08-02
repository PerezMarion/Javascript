// Selectionner une collection (tous les élements de type li)

const listes = document.querySelectorAll("li");

console.log(listes);

// Afficher le texte de l'élément à l'index 0

console.log(listes[0].innerText);

// Modifier le texte de l'élément à l'index 0

listes[0].innerText = "Marion";

console.log(listes[0]);

// Modifier le texte de tout une collection
// Pour chaque élément de la collection mettre le texte en rouge

for (let text of listes) {
  text.style.color = "red";
}

// Selectionner la première occurence d'un élément

const element1 = document.querySelector("li");

// Effectuer des modifications
// Selectionner l'élément d'id "html55" renseigné dans le fichier.html (# pour id et . pour classe) et le mettre en bleu, changer le
// texte pour "HTML6" et mettre sur écoute cet élément pour que lorsque l'utilisateur clique dessus, cela affiche une alerte personnalisée

const title = document.querySelector("#html55");
title.style.color = "blue";
title.innerText = "HTML6";
title.addEventListener("click", function () {
  alert("Voici mon text :" + title.innerText);
});

// Selectionner l'élément d'id "html5" renseigné dans le fichier.html, changer le texte pour "ES6", le mettre en vert et en italique

const text1 = document.querySelector("#html5");
text1.innerText = "ES6";
text1.style.color = "green";
text1.style.fontStyle = "italic";

// Selectionner l'élément d'id "main_title" renseigné dans le fichier.html, changer le texte pour "Parcours JAVA" et mettre sur écoute
// cet élément pour que lorsque l'utilisateur le survole, cela le mette en rouge

const text2 = document.querySelector("#main_title");
text2.innerText = "Parcours JAVA";
text2.addEventListener("mouseover", function () {
  text2.style.color = "red";
});

// Effectuer des modifications sur toute une collection
// Selectionner tous les éléments de type li pour en faire une liste dont chaque élément est mis sur écoute pour que lorsque l'utilisateur
// clique dessus, cela affiche une alerte contenant le texte de cet élément

const listeLi = document.querySelectorAll("li");
console.log("Liste LI : ", listeLi);
for (let element of listeLi) {
  element.addEventListener("click", function () {
    alert(element.innerText);
  });
}