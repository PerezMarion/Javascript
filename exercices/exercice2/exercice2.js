// Ecrire un programme Javascript qui demande à l’utilisateur d’entrer à partir du clavier:
// La distance parcourue(m)
// Le temps(sec)
// Calculer la vitesse selon la formule: vitesse=distance parcourue/temps
// Puis afficher le résultat dans le format suivant : ... m/s(utiliser alert et console.log)


var distance = prompt(`Veuillez entrer la distance parcourue en mètre :`);
var temps = prompt(`Veuillez entrer le temps écoulé en seconde :`)
var vitesse = distance/temps;

alert(`Votre vitesse durant ce trajet est de ${vitesse} m/s.`);
console.log(`Votre vitesse durant ce trajet est de ${vitesse} m/s.`);