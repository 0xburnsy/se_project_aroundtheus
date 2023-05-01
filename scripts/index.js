const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

console.log(initialCards);

// Define for OpenModal Function
const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", openModal);

function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal_opened");
}

//Get the current Name and About me values displayed on page
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Set the initial values of the Name and About me form fields
const titleInput = document.querySelector(".modal__profile-edit");
const descriptionInput = document.querySelector(".modal__description-edit");
titleInput.value = profileTitle.textContent;
descriptionInput.value = profileDescription.textContent;

//Close Edit Modal//
const closeButton = document.querySelector(".modal__close");
closeButton.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal_opened");
}

// Definitions for saveAndClose Function
const saveButton = document.querySelector(".modal__button");
saveButton.addEventListener("click", saveAndCloseModal);

function saveAndCloseModal(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the new values entered by the user
  const titleInput = document.querySelector(".modal__profile-edit");
  const descriptionInput = document.querySelector(".modal__description-edit");
  const newTitle = titleInput.value;
  const newDescription = descriptionInput.value;

  // Update the name and about me sections on the page with the new values
  const title = document.querySelector(".profile__title");
  const description = document.querySelector(".profile__description");
  title.textContent = newTitle;
  description.textContent = newDescription;

  // Remove the modal_opened class from the modal to close it
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal_opened");
}

function getCardElement(data) {
  // Clone the template element and its content
  const template = document.querySelector("#card-template");
  const cardElement = template.content.cloneNode(true);

  // Access the card title and image elements
  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");

  // Set the card title
  titleElement.textContent = data.name;

  // Set the image source and alt text
  imageElement.src = data.link;
  imageElement.alt = data.name;

  // Return the filled-in card element
  return cardElement;
}

function renderInitialCards(initialCards) {
  // Get the cards list element
  const cardsList = document.querySelector(".cards__list");

  // Loop through the initial cards array and create a new card element for each
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsList.appendChild(cardElement);
  });
}

// Call the renderInitialCards function to populate the initial cards on page load
renderInitialCards(initialCards);
