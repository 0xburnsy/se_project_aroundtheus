import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { openModal } from "../utils/utils.js";
import { closeModal } from "../utils/utils.js";
import "./index.css";
import { Popup } from "../components/popup.js";

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

const editFormElement = document.forms["edit-profile-form"];
const addFormElement = document.forms["new-place-form"];

const formValidators = {};

// enable validation
const enableValidation = (validationSettings) => {
  const formList = Array.from(
    document.querySelectorAll(validationSettings.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);
    // here you get the name of the form
    const formName = formElement.getAttribute("name");

    // here you store a validator by the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

//     __   ____  ____   ___             _____   ___     __ ______  ____  ___   ____
//    /  ] /    T|    \ |   \           / ___/  /  _]   /  ]      Tl    j/   \ |    \
//   /  / Y  o  ||  D  )|    \         (   \_  /  [_   /  /|      | |  TY     Y|  _  Y
//  /  /  |     ||    / |  D  Y         \__  TY    _] /  / l_j  l_j |  ||  O  ||  |  |
// /   \_ |  _  ||    \ |     |         /  \ ||   [_ /   \_  |  |   |  ||     ||  |  |
// \     ||  |  ||  .  Y|     |         \    ||     T\     | |  |   j  ll     !|  |  |
//  \____jl__j__jl__j\_jl_____j          \___jl_____j \____j l__j  |____j\___/ l__j__j

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

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  cardsList
);
section.renderItems();

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handleCardClick);
  return card.getView();
}

function handleCardClick(cardData) {
  previewImagePopup.open(cardData);
}

//FUNCTIONS & EVENT HANDLERS----------------------------------------------
// function handleProfileEditClick() {
//   const info = userInfo.getUserInfo();
//   profileTitleInput.value = info.userName;
//   profileDescriptionInput.value = info.userTitle;
//   profileEditPopup.open();
// }

// function handleEditProfileSubmit(inputValues) {
//   userInfo.setUserInfo(profileTitleInput.value, profileDescriptionInput.value);
//   profileEditPopup.close();
// }

// function handleAddCardSubmit(inputValues) {
//   const newCardData = {
//     name: addCardTitleInput.value,
//     link: addCardImageLinkInput.value,
//   };
//   const newCard = createCard(newCardData);
//   section.addItem(newCard);
//   addCardPopup.close();
// }

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
  closeModal(addCardModal);
  addCardFormElement.reset();
  formValidators["new-place-form"].resetValidation();
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

handleClickOutsideImage();
export function handleClickOutsideImage(modal) {
  imageProfileModal.addEventListener("mousedown", (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(imageProfileModal);
    }
  });
}

export function handleMouseDown(e, modal) {
  handleClickOutsideCard(e, modal);
  console.log("clicked");
}
