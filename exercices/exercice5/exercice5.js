// Ecrire un programme javascript qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne En cas de réponse 
// supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10

while (true) {
    let nombre = prompt("Veuillez entrer un nombre entre 10 et 20");
    if(nombre >= 10 && nombre <= 20) {
        alert("Parfait !");
        break;
    } else if (nombre < 10) {
        alert("Plus grand !");
    } else if (nombre > 20) {
        alert("Plus petit !");
    } else {
        alert("Veuillez entrer un nombre valide");
    }
}