import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";

const userNameInput = document.querySelector("#owner-name");
const userDescriptionInput = document.querySelector("#owner-description");

// Get the cards list element
const cardsList = document.querySelector(".cards__list");

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

//  __ __  _____   ___  ____       ____  ____   _____   ___
// |  T  T/ ___/  /  _]|    \     l    j|    \ |     | /   \
// |  |  (   \_  /  [_ |  D  )     |  T |  _  Y|   __jY     Y
// |  |  |\__  TY    _]|    /      |  | |  |  ||  l_  |  O  |
// |  :  |/  \ ||   [_ |    \      |  | |  |  ||   _] |     |
// l     |\    ||     T|  .  Y     j  l |  |  ||  T   l     !
//  \__,_j \___jl_____jl__j\_j    |____jl__j__jl__j    \___/

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userTitleSelector: ".profile__description",
});

//  ____    ___   ____  __ __  ____  __    __  ____  ______  __ __  ____  ___ ___   ____   ____    ___
// |    \  /   \ |    \|  T  T|    \|  T__T  Tl    j|      T|  T  Tl    j|   T   T /    T /    T  /  _]
// |  o  )Y     Y|  o  )  |  ||  o  )  |  |  | |  T |      ||  l  | |  T | _   _ |Y  o  |Y   __j /  [_
// |   _/ |  O  ||   _/|  |  ||   _/|  |  |  | |  | l_j  l_j|  _  | |  | |  \_/  ||     ||  T  |Y    _]
// |  |   |     ||  |  |  :  ||  |  l  `  '  ! |  |   |  |  |  |  | |  | |   |   ||  _  ||  l_ ||   [_
// |  |   l     !|  |  l     ||  |   \      /  j  l   |  |  |  |  | j  l |   |   ||  |  ||     ||     T
// l__j    \___/ l__j   \__,_jl__j    \_/\_/  |____j  l__j  l__j__j|____jl___j___jl__j__jl___,_jl_____j

const previewImagePopup = new popupWithImage("#image-modal");
previewImagePopup.setEventListeners();

//  ____    ___   ____  __ __  ____  __    __  ____  ______  __ __  _____  ____    ___   ___ ___
// |    \  /   \ |    \|  T  T|    \|  T__T  Tl    j|      T|  T  T|     ||    \  /   \ |   T   T
// |  o  )Y     Y|  o  )  |  ||  o  )  |  |  | |  T |      ||  l  ||   __j|  D  )Y     Y| _   _ |
// |   _/ |  O  ||   _/|  |  ||   _/|  |  |  | |  | l_j  l_j|  _  ||  l_  |    / |  O  ||  \_/  |
// |  |   |     ||  |  |  :  ||  |  l  `  '  ! |  |   |  |  |  |  ||   _] |    \ |     ||   |   |
// |  |   l     !|  |  l     ||  |   \      /  j  l   |  |  |  |  ||  T   |  .  Yl     !|   |   |
// l__j    \___/ l__j   \__,_jl__j    \_/\_/  |____j  l__j  l__j__jl__j   l__j\_j \___/ l___j___j

// Edit Profile Modal
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = new PopupWithForm(
  "#edit-profile-modal",
  handleEditProfileSubmit
);
profileEditPopup.setEventListeners();
profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
});

function handleProfileEditClick() {
  const user = userInfo.getUserInfo();
  userNameInput.value = user.name;
  userDescriptionInput.value = user.job;
  profileEditPopup.open();
}

function handleEditProfileSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
}

// Add Card Modal
const addCardButton = document.querySelector(".profile__card-add-button");
const addCardTitleField = document.querySelector(".modal__input-title");
const addCardImageLinkField = document.querySelector(".modal__input-link");
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
const form = document.querySelector(".modal__form");
const validator = new FormValidator(form);
addCardPopup.setEventListeners();
addCardButton.addEventListener("click", () => {
  addCardPopup.open();
});

function handleAddCardSubmit(inputValues) {
  validator.resetValidation();

  const newCardData = {
    name: addCardTitleField.value,
    link: addCardImageLinkField.value,
  };
  const newCard = createCard(newCardData);
  section.addItem(newCard);
  addCardPopup.close();
}

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

const addCardModal = document.querySelector("#add-card-modal");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");

const editProfileFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
addCardFormValidator.enableValidation();
