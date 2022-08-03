// Récupération des données du formulaire

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const zipCode = document.querySelector("#zip_code");
const city = document.querySelector("#city");
const country = document.querySelector("#country");

const submitButton = document.querySelector("#submit_button");
const reinitialiserButton = document.querySelector("#reinitialiser_button");
const messageCreation = document.querySelector("#creation_succes");

const lastNameError = document.querySelector("#err_last_name");
const firstNameError = document.querySelector("#err_first_name");
const emailError = document.querySelector("#err_email");
const phoneError = document.querySelector("#err_phone");
const addressError = document.querySelector("#err_address");
const zipCodeError = document.querySelector("#err_zip_code");
const cityError = document.querySelector("#err_city");
const countryError = document.querySelector("#err_country");

// Récupération de la liste de users enregistrés

const usersTableBody = document.querySelector("#users_list");

// Quand l'utilisateur clique sur le bouton "Ajouter" : afficher dans la console toutes les données qui vienne d'être renseignées dans le formulaire

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Last name : ", lastName.value);
    console.log("First name : ", firstName.value);    
    console.log("Email : ", email.value);
    console.log("Phone : ", phone.value);
    console.log("Address : ", address.value);
    console.log("Zip Code : ", zipCode.value);
    console.log("City : ", city.value);
    console.log("Country : ", country.value);

    // event.preventDefault : quand on clique sur add, on évite que la page tente de soumettre les données vers le serveur et recharge la page

    // Gestion des erreurs lors de la saisir du formulaire (chaine vide = 0 = false / sinon = 1 = true)
    // Si le champ est vide, cela affiche en dessous du champ une phrase et cela rajoute l'erreur à une liste d'erreur
    // Puis on fait un return pour ne pas que la suite se déroule (ajouter une ligne, des colonnes dans la tableau et les remplir)
    // Si le champ est rempli, cela n'affiche rien en dessus du champ

    if (!lastName.value) {
        lastNameError.innerText = "Veuillez remplir le nom";
        lastNameError.classList.add("error");
        return;
    } else {
        lastNameError.innerText = "";
        lastNameError.classList.remove("error");
    }

    if (!firstName.value) {
        firstNameError.innerText = "Veuillez remplir le prenom";
        firstNameError.classList.add("error");
        return;
    } else {
        firstNameError.innerText = "";
        firstNameError.classList.remove("error");
    }

    if (!email.value) {
        emailError.innerText = "Veuillez remplir l'email";
        emailError.classList.add("error");
        return;
    } else {
        emailError.innerText = "";
        emailError.classList.remove("error");
    }

    if (!phone.value) {
        phoneError.innerText = "Veuillez remplir le telephone";
        phoneError.classList.add("error");
        return;
    } else {
        phoneError.innerText = "";
        phoneError.classList.remove("error");
    }

    if (!address.value) {
        addressError.innerText = "Veuillez remplir l'adresse";
        addressError.classList.add("error");
        return;
    } else {
        addressError.innerText = "";
        addressError.classList.remove("error");
    }

    if (!zipCode.value) {
        zipCodeError.innerText = "Veuillez remplir le code postal";
        zipCodeError.classList.add("error");
        return;
    } else {
        zipCodeError.innerText = "";
        zipCodeError.classList.remove("error");
    }

    if (!city.value) {
        cityError.innerText = "Veuillez remplir la ville";
        cityError.classList.add("error");
        return;
    } else {
        cityError.innerText = "";
        cityError.classList.remove("error");
    }

    if (!country.value) {
        countryError.innerText = "Veuillez choisir un pays";
        countryError.classList.add("error");
        return;
    } else {
        countryError.innerText = "";
        countryError.classList.remove("error");
    }

    // Afficher un message pendant 5 secondes lorsque la création est effectuée 
    
    messageCreation.innerText = "Création effectuée avec succès";
    messageCreation.classList.add("succes");
    setTimeout(function() {
        messageCreation.innerText = "";
        messageCreation.classList.remove("succes")
    }, 5000)

    // Créer une ligne pour le nouvel utilisateur

    const userRow = document.createElement("tr");

    // Créer des colonnes qui acceuillent les informations du nouvel utilisateur

    const lastNameColumn = document.createElement("td");
    lastNameColumn.innerText = lastName.value;

    const firstNameColumn = document.createElement("td");
    firstNameColumn.innerText = firstName.value;

    const emailColumn = document.createElement("td");
    emailColumn.innerText = email.value;

    const phoneColumn = document.createElement("td");
    phoneColumn.innerText = phone.value;

    const addressColumn = document.createElement("td");
    addressColumn.innerText = address.value;

    const zipCodeColumn = document.createElement("td");
    zipCodeColumn.innerText = zipCode.value;

    const cityColumn = document.createElement("td");
    cityColumn.innerText = city.value;

    const countryColumn = document.createElement("td");
    countryColumn.innerText = country.value;

    const actionsColumn = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Supprimer";
    deleteButton.addEventListener("click", function () {
        userRow.remove();
    });
  
    actionsColumn.appendChild(deleteButton);

    // Ajouter à la nouvelle ligne créée plusieurs enfants que sont les colonnes créées

    userRow.append(
        lastNameColumn, 
        firstNameColumn, 
        emailColumn, 
        phoneColumn, 
        addressColumn, 
        zipCodeColumn, 
        cityColumn, 
        countryColumn, 
        actionsColumn);
    
    // Ajouter au tableau "liste des utilisateurs" un seul enfant qu'est la ligne du nouvel utilisateur (contenant déjà les colonnes)
  
    usersTableBody.appendChild(userRow);

    // Vider le formulaire (plus rien dans les champs car on a ajouté les informations au tableau en dessous)
    
    lastName.value = "";
    firstName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    zipCode.value = "";
    city.value = "";
    country.value = "";
});

// Quand l'utilisateur clique sur le bouton "Réinitialiser" : supprimer toutes les données qui vienne d'être renseignées dans le formulaire

reinitialiserButton.addEventListener("click", function (event) {
    event.preventDefault();
    usersTableBody.innerHTML = "";
});