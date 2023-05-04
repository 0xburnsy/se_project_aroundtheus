const titleElement = document.querySelector(".profile__title");
const descriptionElement = document.querySelector(".profile__description");
const modal = document.querySelector(".modal");

// Define for OpenModal Function
const editButton = document.querySelector(".profile__edit-button");

//Get the current Name and About me values displayed on page
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Close Edit Modal//
const closeButton = document.querySelector(".modal__close");

// Definitions for saveAndClose Function
const saveButton = document.querySelector(".modal__button");

// Clone the template element and its content
const template = document.querySelector("#card-template");

// Get the cards list element
const cardsList = document.querySelector(".cards__list");

// Get the form input elements
const titleInput = document.querySelector(".modal__input-profile");
const descriptionInput = document.querySelector(".modal__input-description");

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

function getCardElement(data) {
  // Clone the template element and its content
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
  // Loop through the initial cards array and create a new card element for each
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsList.appendChild(cardElement);
  });
}

// Call the renderInitialCards function to populate the initial cards on page load
renderInitialCards(initialCards);

// Define for OpenModal Function
editButton.addEventListener("click", openModal);

function openModal() {
  // Set the initial values of the form fields
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;

  // Add the modal_opened class to the modal to open it
  modal.classList.add("modal_opened");
}

//Close Edit Modal//
closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("modal_opened");
}

// Add the "submit" event listener to the form
const modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", saveAndCloseModal);

function saveAndCloseModal(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the new values entered by the user
  const newTitle = titleInput.value;
  const newDescription = descriptionInput.value;

  // Update the name and about me sections on the page with the new values
  profileTitle.textContent = newTitle;
  profileDescription.textContent = newDescription;
}
