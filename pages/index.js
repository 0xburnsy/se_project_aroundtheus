import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { openModal } from "../utils/utils.js";
import { closeModal } from "../utils/utils.js";

const titleElement = document.querySelector(".profile__title");
const descriptionElement = document.querySelector(".profile__description");
const editProfileModal = document.querySelector("#edit-profile-modal");
const imageProfileModal = document.querySelector("#image-modal");
const closeImageModalButton = imageProfileModal.querySelector(".modal__close");

// Define for OpenModal Function
const editProfileButton = document.querySelector(".profile__edit-button");

//Get the current Name and About me values displayed on page
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Close Edit Modal//
const profileModalCloseButton = editProfileModal.querySelector(".modal__close");

// Definitions for saveAndClose Function
const profileSaveButton = document.getElementById("profileSaveButton");
const cardSaveButton = document.getElementById("addCardSaveButton");

// Clone the template element and its content
const template = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Get the cards list element
const cardsList = document.querySelector(".cards__list");

// Get the form input elements
const titleInput = document.querySelector(".modal__input-profile");
const descriptionInput = document.querySelector(".modal__input-description");

// Add the "submit" event listener to the form
const profileFormElement = editProfileModal.querySelector(".modal__form");
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(event) {
  event.preventDefault();

  // Get the new values entered by the user
  const newTitle = titleInput.value;
  const newDescription = descriptionInput.value;

  // Update the name and about me sections on the page with the new values
  profileTitle.textContent = newTitle;
  profileDescription.textContent = newDescription;

  closeModal(editProfileModal);
}

const addCardModalButton = document.querySelector(".profile__card-add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardTitleInput = addCardFormElement.querySelector(".modal__input-title");
const cardUrlInput = addCardFormElement.querySelector(".modal__input-link");

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsList.prepend(cardElement);
}

function fillProfileForm() {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function openEditProfileModal() {
  openModal(editProfileModal);
}

// Event Listeners
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
addCardModalButton.addEventListener("click", () => openModal(addCardModal));
editProfileButton.addEventListener("click", () => {
  fillProfileForm(editProfileModal);
  openEditProfileModal();
});

//   _____                     __     __    _ _     _       _   _
//  |  ___|__  _ __ _ __ ___   \ \   / /_ _| (_) __| | __ _| |_(_) ___  _ __
//  | |_ / _ \| '__| '_ ` _ \   \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//  |  _| (_) | |  | | | | | |   \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//  |_|  \___/|_|  |_| |_| |_|    \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-type-error",
  errorClass: "modal__error_visible",
};

const editFormElement = document.querySelector("#edit-profile-form");
const addFormElement = document.querySelector("#new-place-form");

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
const addFormValidator = new FormValidator(validationSettings, addFormElement);

const formElement = document.querySelector(".modal__form");

editFormValidator.enableValidation();
addFormValidator.enableValidation();

addFormValidator.resetValidation();

//    ____              _
//   / ___|__ _ _ __ __| |_
//  | |   / _` | '__/ _` (_)
//  | |__| (_| | | | (_| |_
//   \____\__,_|_|  \__,_( )
//                       |/

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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const cardSelector = "#card-template";

function getCardElement(data) {
  const card = new Card(data, "#card-template");
  const cardElement = card.getView();
  return cardElement;
}

function renderInitialCards(initialCards) {
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsList.appendChild(cardElement);
  });
}

// Call the renderInitialCards function to populate the initial cards on page load
renderInitialCards(initialCards);

//   _   _                 _ _
//  | | | | __ _ _ __   __| | | ___ _ __ ___ _
//  | |_| |/ _` | '_ \ / _` | |/ _ \ '__/ __(_)
//  |  _  | (_| | | | | (_| | |  __/ |  \__ \_
//  |_| |_|\__,_|_| |_|\__,_|_|\___|_|  |___( )
//                                          |/
function handleAddCardFormSubmit(event) {
  event.preventDefault();

  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const addCardSubmitButton = document.getElementById("addCardSaveButton");

  renderCard({ name, link });
  closeModal(addCardModal);
  addCardFormElement.reset();
}

handleClickOutsideProfile();
function handleClickOutsideProfile(modal) {
  editProfileModal.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(editProfileModal);
    }
  });
}

handleClickOutsideCard();
function handleClickOutsideCard(modal) {
  addCardModal.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(addCardModal);
    }
  });
}
