export const userNameInput = document.querySelector("#owner-name");
export const userDescriptionInput =
  document.querySelector("#owner-description");

export const cardsList = document.querySelector(".cards__list");

export const cardSelector = "#card-template";

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);

export const addCardButton = document.querySelector(
  ".profile__card-add-button"
);
export const addCardTitleField = document.querySelector(".modal__input-title");
export const addCardImageLinkField =
  document.querySelector(".modal__input-link");

export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-type-error",
  errorClass: "modal__error_visible",
};

export const addCardModal = document.querySelector("#add-card-modal");
export const profileEditModal = document.querySelector("#edit-profile-modal");
export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addCardForm = addCardModal.querySelector(".modal__form");
