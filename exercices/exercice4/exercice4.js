// Ecrire un programme Javascript qui permet à l’utilisateur de définir une adresse email et un mot de passe
// Dans un second temps, il sera demandé à l’utilisateur de fournir l’email et le mot de passe via le prompt:
// Si l’email et le mot de passe ne correspondent pas aux valeurs définies, le message “Identifiants incorrect devra s’afficher”
// et l’utilisateur devra recommencer la saisie des valeurs. Sinon, le message “Bienvenu dans votre espace client” devra s’afficher.
// Le nombre de fois que l’utilisateur peut saisir des mauvais identifiants est limité à 5, ensuite le programme va s’arrêter avec 
// un message disant “Vous avez saisi des mauvais identifiants x fois, votre compte est bloqué".

alert('Bienvenue sur la page de création de compte')
const mail = prompt(`Veuillez entrer une adresse mail : `);
const mdp = prompt(`Veuillez entrer un mot de passe : `);

alert('Bienvenue sur la page d authentification')
let tentativesRestantes = 5;

while(true) {
    let mail2 = prompt(`Veuillez entrer votre adresse mail de connexion : `);
    let mdp2 = prompt(`Veuillez entrer votre mot de passe : `);
    tentativesRestantes = tentativesRestantes - 1;
    if(mail2 == mail && mdp2 == mdp) {
        alert('Vous venez de vous connecter avec succès.');
        break;
    } else {
        if(tentativesRestantes > 0) {
            alert('Adresse mail ou mot de passe incorrect, veuiller réessayer. ' + tentativesRestantes + ' tentatives restantes.')
        } else {
            alert('Adresse mail ou mot de passe incorrect. Votre compte a été bloqué.')
            break;
        }
    }
}

// Attention : en Javascript == renvoie true lorsque la valeur de deux variables est la même mais ne s'interesse pas aux types des variables
// Par exemple si on met 1 == "1" cela renvoie true car on a 1 des deux côtés, pourtant on compare un Integer et un String
// Si on veut comparer valeur et type en même temps il faut utiliser === (1 === "1" retournera false) idem pour la diférence on utilise !==
// Ici on compare deux strings donc on peut quand même utiliser == pour comparer la valeur des deux strings
// C'est différent de Java ou = compare la valeur et == compare la valeur et le type