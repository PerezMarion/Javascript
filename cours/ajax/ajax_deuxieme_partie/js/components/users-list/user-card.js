// ---------------------------------------------- Version avant encapsulation du code --------------------------------------------- //

// export function UserCard(user) {

       // Création de la carte
//     const card = document.createElement("div");
//     card.classList.add("card");
  
       // Création du parent de l'image
//     const imageBox = document.createElement("div");
//     imageBox.classList.add("card__image-box");
  
       // Création de l'image
//     const image = document.createElement("img");
//     image.classList.add("card__image");
//     image.src = `https://robohash.org/${user.id}`;
//     image.alt = user.name;
  
       // Ajout de l'image à son parent
//     imageBox.appendChild(image);
  
       // Création du titre
//     const cardTitle = document.createElement("p");
//     cardTitle.classList.add("card__title", "mt05");
//     cardTitle.innerText = user.name;
  
       // Création de la description
//     const cardDescription = document.createElement("p");
//     cardDescription.classList.add("card__description", "mt05");
//     cardDescription.innerText = user.company.catchPhrase;
  
       // Création du bouton
//     const viewButton = document.createElement("button");
//     viewButton.classList.add("btn");
//     viewButton.innerText = "Voir";
  
       // Ajout du parent de l'image, du titre, de la description et du bouton à la carte
//     card.append(imageBox, cardTitle, cardDescription, viewButton);
  
//     return card;
// }

// ---------------------------------------------- Version après encapsulation du code --------------------------------------------- //
  
import { CardImageContainer } from "./card-image.js";
import { CardTitle } from "./card-title.js";
import { CardDescription } from "./card-description.js";
import { CardButton } from "./card-button.js";

export function UserCard(user) {
    const { id, name, company } = user;
    const card = document.createElement("div");
    card.classList.add("card");

    const imageBox = CardImageContainer(id, name);
  
    const cardTitle = CardTitle(name);
  
    const cardDescription = CardDescription(company);
  
    const viewButton = CardButton(id);
  
    card.append(imageBox, cardTitle, cardDescription, viewButton);
  
    return card;
}