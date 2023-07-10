import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";

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

// PopupWithImage
const previewImagePopup = new popupWithImage("#image-modal");
previewImagePopup.setEventListeners();

// PopupwithFrom

// Edit Profile Modal
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = new PopupWithForm(
  "#edit-profile-modal",
  handleEditProfileSubmit
);
const profileTitleField = document.querySelector(".profile__title");
const profileDescriptionField = document.querySelector(".profile__description");
profileEditPopup.setEventListeners();
profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
});

function handleProfileEditClick() {
  profileEditPopup.open();
}

function handleEditProfileSubmit(inputValues) {
  userInfo.setUserInfo(profileTitleField.value, profileDescriptionField.value);
  profileEditPopup.close();
}

// Add Card Modal
const addCardButton = document.querySelector(".profile__card-add-button");
const addCardTitleField = document.querySelector(".modal__input-title");
const addCardImageLinkField = document.querySelector(".modal__input-link");
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();
addCardButton.addEventListener("click", () => {
  addCardPopup.open();
});

function handleAddCardSubmit(inputValues) {
  const newCardData = {
    name: addCardTitleField.value,
    link: addCardImageLinkField.value,
  };
  const newCard = createCard(newCardData);
  section.addItem(newCard);
  addCardPopup.close();
}
