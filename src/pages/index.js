import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  cardData,
  cardSelector,
  profileEditButton,
  addCardButton,
  addCardTitleField,
  addCardImageLinkField,
  validationSettings,
  profileEditForm,
  addCardForm,
} from "../utils/Constants.js";
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

const previewImagePopup = new popupWithImage("#image-modal", handleImageClick);

function handleImageClick(cardData) {
  previewImagePopup.setEventListeners();
  previewImagePopup.open(cardData);
}

//  ____    ___   ____  __ __  ____  __    __  ____  ______  __ __  _____  ____    ___   ___ ___
// |    \  /   \ |    \|  T  T|    \|  T__T  Tl    j|      T|  T  T|     ||    \  /   \ |   T   T
// |  o  )Y     Y|  o  )  |  ||  o  )  |  |  | |  T |      ||  l  ||   __j|  D  )Y     Y| _   _ |
// |   _/ |  O  ||   _/|  |  ||   _/|  |  |  | |  | l_j  l_j|  _  ||  l_  |    / |  O  ||  \_/  |
// |  |   |     ||  |  |  :  ||  |  l  `  '  ! |  |   |  |  |  |  ||   _] |    \ |     ||   |   |
// |  |   l     !|  |  l     ||  |   \      /  j  l   |  |  |  |  ||  T   |  .  Yl     !|   |   |
// l__j    \___/ l__j   \__,_jl__j    \_/\_/  |____j  l__j  l__j__jl__j   l__j\_j \___/ l___j___j

// Edit Profile Modal
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
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();
addCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});

function handleAddCardSubmit(inputValues) {
  const { name, link } = inputValues;
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

const editProfileFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
addCardFormValidator.enableValidation();
